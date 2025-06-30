
const PatientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  address: String,
  phone: String,
  emergencyContact: String,
  insuranceInfo: String,
  medicalHistory: [String]
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);
