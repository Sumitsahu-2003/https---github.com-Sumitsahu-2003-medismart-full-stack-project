const mongoose = require('mongoose');

const HealthRecordSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  diagnoses: [String],
  medications: [String],
  allergies: [String],
  immunizations: [String],
  encounterRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Encounter' }],
  documents: [String] // file paths or URLs
}, { timestamps: true });

module.exports = mongoose.model('HealthRecord', HealthRecordSchema);
