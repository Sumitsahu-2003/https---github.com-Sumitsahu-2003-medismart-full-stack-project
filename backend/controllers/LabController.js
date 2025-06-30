// controllers/LabController.js

exports.orderLabTest = async (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Lab test ordered successfully',
    data: req.body
  });
};

exports.getLabResults = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Lab results retrieved successfully',
    data: []
  });
};

exports.getLabResultById = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: `Lab result ${id} retrieved successfully`,
    data: { id, testType: 'Blood test', status: 'completed', results: 'Normal values' }
  });
};
