const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  amount: Number,
  status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  date: { type: Date, default: Date.now },
  insuranceClaim: String
});

module.exports = mongoose.model('Billing', BillingSchema);
