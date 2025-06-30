const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const authMiddleware = require('../middleware/authMiddleware');

// Get health analytics
router.get('/health', authMiddleware, analyticsController.getHealthAnalytics);

// Get admin/system reports
router.get('/admin', authMiddleware, analyticsController.getAdminReports);

module.exports = router;
