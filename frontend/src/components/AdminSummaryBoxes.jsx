import React from 'react';

const AdminSummaryBoxes = ({ patientCount, doctorCount }) => (
  <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
    <div style={{
      background: '#f5f6fa',
      borderRadius: '10px',
      padding: '2rem',
      minWidth: '180px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
    }}>
      <h3>Patient</h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2980b9' }}>{patientCount}</p>
    </div>
    <div style={{
      background: '#f5f6fa',
      borderRadius: '10px',
      padding: '2rem',
      minWidth: '180px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
    }}>
      <h3>Doctor</h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#27ae60' }}>{doctorCount}</p>
    </div>
  </div>
);

export default AdminSummaryBoxes;
