const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  date: Date,
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' },
  reminderSent: { type: Boolean, default: false },
  telemedicineLink: String
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
