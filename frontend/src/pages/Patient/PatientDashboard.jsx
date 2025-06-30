import React from 'react';
import { Link } from 'react-router-dom';
import './PatientDashboard.css'; // Create this CSS file

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <header className="dashboard-header">
        <h1>Patient Dashboard</h1>
      </header>
      
      <div className="dashboard-grid">
        <Link to="/patient/e-prescription" className="dashboard-card">
          <div className="card-icon">📝</div>
          <h2>E-Prescription</h2>
          <p>Upload your prescriptions</p>
        </Link>
        
        <Link to="/patient/test-results" className="dashboard-card">
          <div className="card-icon">📊</div>
          <h2>Test Results</h2>
          <p>View your medical reports</p>
        </Link>
        
        <Link to="/patient/e-medicine" className="dashboard-card">
          <div className="card-icon">💊</div>
          <h2>E-Medicine</h2>
          <p>Order medicines online</p>
        </Link>
      </div>
    </div>
  );
};

export default PatientDashboard;
