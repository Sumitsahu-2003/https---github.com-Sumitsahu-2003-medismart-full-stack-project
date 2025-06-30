const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, enum: ['Tablet', 'Syrup', 'Capsule', 'Injection'] },
  stock: { type: Number, default: 0 },
  pharmacy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // If linking to providers
  prescriptionRequired: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Medicine', MedicineSchema);
