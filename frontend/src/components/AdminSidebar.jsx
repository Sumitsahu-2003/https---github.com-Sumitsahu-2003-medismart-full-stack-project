// src/components/AdminSidebar.jsx
import React from 'react';

const AdminSidebar = ({ onAppointmentClick, onTotalUsersClick }) => (
  <aside style={{
    width: '220px',
    background: '#222',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem 1rem'
  }}>
    <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Admin Panel</h2>
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#ffeb3b",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "inherit",
              textAlign: "left"
            }}
            onClick={onAppointmentClick}
          >
            Appointment Today
          </button>
        </li>
        <li style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#4caf50",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "inherit",
              textAlign: "left"
            }}
            onClick={onTotalUsersClick}
          >
            Total Users
          </button>
        </li>
      </ul>
    </nav>
  </aside>
);

export default AdminSidebar;
