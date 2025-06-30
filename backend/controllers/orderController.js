const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Medicine = require('../models/Medicine');

exports.placeOrder = async (req, res) => {
  const { deliveryAddress, paymentMethod } = req.body;
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.medicine');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Validate stock and calculate total
    let totalAmount = 0;
    for (const item of cart.items) {
      const medicine = await Medicine.findById(item.medicine._id);
      if (medicine.stock < item.quantity) {
        return res.status(400).json({ message: `${medicine.name} is out of stock` });
      }
      totalAmount += item.medicine.price * item.quantity;
    }

    // Create order
    const order = new Order({
      user: req.user.id,
      deliveryAddress,
      paymentMethod,
      totalAmount,
      items: cart.items.map(item => ({
        medicine: item.medicine._id,
        quantity: item.quantity,
        price: item.medicine.price
      }))
    });

    // Update stock
    for (const item of cart.items) {
      await Medicine.updateOne(
        { _id: item.medicine._id },
        { $inc: { stock: -item.quantity } }
      );
    }

    // Clear cart
    await Cart.deleteOne({ _id: cart._id });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error placing order' });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('items.medicine');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (order.status === 'delivered') {
      return res.status(400).json({ message: 'Delivered orders cannot be cancelled' });
    }
    order.status = 'cancelled';
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling order' });
  }
};
