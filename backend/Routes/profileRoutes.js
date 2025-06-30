const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

// Get current user's profile
router.get('/me', authMiddleware, profileController.getProfile);

// Update profile
router.put('/me', authMiddleware, profileController.updateProfile);

// For admins/providers: get patient/provider by ID
router.get('/:id', authMiddleware, profileController.getProfileById);

module.exports = router;
