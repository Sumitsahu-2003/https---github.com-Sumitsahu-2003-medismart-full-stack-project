const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: String,
  lastName: String,
  specialization: String,
  qualifications: String,
  availability: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model('Provider', ProviderSchema);
