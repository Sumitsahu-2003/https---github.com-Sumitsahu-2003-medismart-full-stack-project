const Cart = require('../models/Cart');
const Medicine = require('../models/Medicine');

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.medicine');
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart' });
  }
};

exports.addToCart = async (req, res) => {
  const { medicineId, quantity } = req.body;
  try {
    const medicine = await Medicine.findById(medicineId);
    if (!medicine) return res.status(404).json({ message: 'Medicine not found' });

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) cart = new Cart({ user: req.user.id, items: [] });

    const existingItem = cart.items.find(item => item.medicine.toString() === medicineId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ medicine: medicineId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart' });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    cart.items = cart.items.filter(item => item.medicine.toString() !== req.params.medicineId);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing item' });
  }
};
