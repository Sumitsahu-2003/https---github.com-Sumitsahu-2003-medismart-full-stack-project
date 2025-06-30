const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');

// Book new appointment
router.post('/', authMiddleware, appointmentController.bookAppointment);

// Get all appointments for user
router.get('/', authMiddleware, appointmentController.getAppointments);

// Update appointment (e.g., reschedule, cancel)
router.put('/:id', authMiddleware, appointmentController.updateAppointment);

// Telemedicine link (example)
router.get('/:id/telemedicine', authMiddleware, appointmentController.getTelemedicineLink);

module.exports = router;
