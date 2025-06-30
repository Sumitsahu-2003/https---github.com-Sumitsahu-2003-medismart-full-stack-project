const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const billingController = require('../controllers/billingController');

// Create a new billing record
router.post('/', authMiddleware, billingController.createBilling);

// Get all billing records (for admin or doctor)
router.get('/', authMiddleware, billingController.getAllBillings);

// Get a single billing record by ID
router.get('/:id', authMiddleware, billingController.getBillingById);

// Update a billing record by ID
router.put('/:id', authMiddleware, billingController.updateBilling);

// Delete a billing record by ID
router.delete('/:id', authMiddleware, billingController.deleteBilling);

module.exports = router;
