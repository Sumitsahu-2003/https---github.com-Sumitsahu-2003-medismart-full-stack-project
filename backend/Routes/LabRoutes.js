const express = require('express');
const router = express.Router();
const labController = require('../controllers/LabController');
const authMiddleware = require('../middleware/authMiddleware');

// Order a new lab test
router.post('/', authMiddleware, labController.orderLabTest);

// Get all lab results for user
router.get('/', authMiddleware, labController.getLabResults);

// Get a specific lab result
router.get('/:id', authMiddleware, labController.getLabResultById);

module.exports = router;
