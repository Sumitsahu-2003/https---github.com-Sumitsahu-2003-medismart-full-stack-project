const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Get cart items
router.get('/', authMiddleware, cartController.getCart);

// Add/update item in cart
router.post('/add', authMiddleware, cartController.addToCart);

// Remove item from cart
router.delete('/remove/:medicineId', authMiddleware, cartController.removeFromCart);

module.exports = router;
