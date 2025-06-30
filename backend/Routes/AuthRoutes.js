const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authCtrl = require('../controllers/authController');

router.post('/register',authCtrl.register);
router.post('/admin/login',authCtrl.adminLogin);

router.get('/dashboard',authCtrl.dashboard,authMiddleware);
router.post('/patient/login',authCtrl.patientLogin);
module.exports = router;