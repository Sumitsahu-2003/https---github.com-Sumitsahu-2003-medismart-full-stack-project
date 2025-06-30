// controllers/PrescriptionController.js

exports.createPrescription = async (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Prescription created successfully',
    data: req.body
  });
};

exports.getPrescriptions = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Prescriptions retrieved successfully',
    data: []
  });
};

exports.getPrescriptionById = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: `Prescription ${id} retrieved successfully`,
    data: { id, medication: 'Sample medication' }
  });
};

exports.updatePrescription = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: `Prescription ${id} updated successfully`,
    data: req.body
  });
};
