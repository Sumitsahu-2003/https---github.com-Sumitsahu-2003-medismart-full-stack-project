const mongoose = require('mongoose');

const EncounterSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  date: { type: Date, default: Date.now },
  notes: String,
  treatmentPlan: String,
  labResults: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lab' }],
  documents: [String]
}, { timestamps: true });

module.exports = mongoose.model('Encounter', EncounterSchema);
