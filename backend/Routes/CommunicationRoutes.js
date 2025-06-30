const express = require('express');
const router = express.Router();
const communicationController = require('../controllers/communicationController');
const authMiddleware = require('../middleware/authMiddleware');

// Send a message
router.post('/message', authMiddleware, communicationController.sendMessage);

// Get all messages for user
router.get('/messages', authMiddleware, communicationController.getMessages);

// Mark message as read
router.put('/message/:id/read', authMiddleware, communicationController.markAsRead);

module.exports = router;
