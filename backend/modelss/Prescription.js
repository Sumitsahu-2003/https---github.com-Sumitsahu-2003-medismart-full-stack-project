const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  medication: String,
  dosage: String,
  instructions: String,
  pharmacy: String,
  dateIssued: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Prescription', PrescriptionSchema);
