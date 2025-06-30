const express = require('express');
const router = express.Router();
const healthRecordController = require('../controllers/healthRecordController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all health records for the user
router.get('/', authMiddleware, healthRecordController.getAllRecords);

// Create a new health record
router.post('/', authMiddleware, healthRecordController.createRecord);

// Get a specific health record
router.get('/:id', authMiddleware, healthRecordController.getRecordById);

// Update a health record
router.put('/:id', authMiddleware, healthRecordController.updateRecord);

// Upload a document to a health record
router.post('/:id/upload', authMiddleware, healthRecordController.uploadDocument);

module.exports = router;
