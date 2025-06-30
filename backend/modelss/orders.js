const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    pincode: String,
    country: String
  },
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'], 
    default: 'pending' 
  },
  paymentMethod: { type: String, enum: ['cod', 'online'], required: true },
  prescription: { type: mongoose.Schema.Types.ObjectId, ref: 'HealthRecord' }, // Optional
  items: [OrderItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
