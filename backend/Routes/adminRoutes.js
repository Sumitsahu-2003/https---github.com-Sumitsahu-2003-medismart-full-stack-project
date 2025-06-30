const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// GET /api/admin/stats
router.get('/stats', authMiddleware, (req, res) => {
  res.json({
    patients: 120,
    doctors: 15
  });
});

module.exports = router;
