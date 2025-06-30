const mongoose = require('mongoose');

const LabSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  testName: String,
  result: String,
  dateOrdered: Date,
  dateCompleted: Date,
  documents: [String]
}, { timestamps: true });

module.exports = mongoose.model('Lab', LabSchema);
