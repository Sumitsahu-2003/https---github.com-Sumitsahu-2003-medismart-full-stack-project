// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectdb = require('../config/db');
const errorHandlerMiddleware = require('../middleware/ErrorHandlerMiddleware');
const loggingMiddleware = require('../middleware/loggingMiddleware');

// Import route files
const authRoutes = require('../Routes/AuthRoutes');
const app = express();
const profileRoutes = require('../Routes/profileRoutes');
const healthRecordRoutes = require('../Routes/HealthRecordsRoutes');
const appointmentRoutes = require('../Routes/appointmentRoutes');
const prescriptionRoutes = require('../Routes/prescriptionRoutes');
const labRoutes = require('../Routes/labRoutes');
const communicationRoutes = require('../Routes/communicationRoutes');
const billingRoutes = require('../Routes/billingRoutes');
const analyticsRoutes = require('../Routes/analyticsRoutes');
const uploadRoutes = require('../Routes/uploadRoute');
const adminRoutes = require('../Routes/adminRoutes');
// ✅ Declare the app


// Connect to MongoDB
connectdb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/health-records', healthRecordRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/labs', labRoutes);
app.use('/api/communication', communicationRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/admin', adminRoutes);
// Root
app.get('/', (req, res) => {
  res.send('E-Health Record Backend API is running');
});

// Error handler
app.use(errorHandlerMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
