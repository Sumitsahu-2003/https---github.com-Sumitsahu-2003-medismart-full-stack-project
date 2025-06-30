const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');
const authMiddleware = require('../middleware/authMiddleware');

// Create new prescription
router.post('/', authMiddleware, prescriptionController.createPrescription);

// Get all prescriptions for user
router.get('/', authMiddleware, prescriptionController.getPrescriptions);

// Get a specific prescription
router.get('/:id', authMiddleware, prescriptionController.getPrescriptionById);

module.exports = router;
