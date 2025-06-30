const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Place order
router.post('/place', authMiddleware, orderController.placeOrder);

// Get order history
router.get('/history', authMiddleware, orderController.getOrderHistory);

// Cancel order
router.put('/cancel/:orderId', authMiddleware, orderController.cancelOrder);

module.exports = router;
