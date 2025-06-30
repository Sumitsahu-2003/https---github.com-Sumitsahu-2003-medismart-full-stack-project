import React from 'react';

const AdminAccount = ({ admin }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    padding: '1rem 2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    marginBottom: '2rem'
  }}>
    <img
      src={admin.photo}
      alt="Admin"
      style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '1.5rem' }}
    />
    <div>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{admin.id}</div>
      <div style={{ color: '#888' }}>{admin.role}</div>
    </div>
  </div>
);

export default AdminAccount;
