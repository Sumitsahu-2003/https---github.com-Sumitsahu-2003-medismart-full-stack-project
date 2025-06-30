import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleDoctorLogin = () => {
    navigate('/login/doctor');
  };

  const handlePatientLogin = () => {
    navigate('/login/patient');
  };
 const handleAdminLogin = () => {
  navigate('/login/admin');
};


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f5f5f5'
    }}>
      <h2 style={{ marginBottom: '2rem' }}>Select Login Type</h2>
      <button
        onClick={handleDoctorLogin}
        style={{
          padding: '12px 32px',
          fontSize: '18px',
          borderRadius: '5px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}
      >
        Doctor
      </button>
      <button
        onClick={handlePatientLogin}
        style={{
          padding: '12px 32px',
          fontSize: '18px',
          borderRadius: '5px',
          background: '#00bfae',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Patient
      </button>
    <button
   onClick={handleAdminLogin}
   style={{
    padding: '12px 32px',
    fontSize: '18px',
    borderRadius: '5px',
    background: '#9c27b0',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '1rem'
     //width: '200px'
  }}
>
  Admin
</button>
    </div>
  );
};

export default Login;
