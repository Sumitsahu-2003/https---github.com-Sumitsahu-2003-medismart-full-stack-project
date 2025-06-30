import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminSummaryBoxes from '../components/AdminSummaryBoxes';
import AdminAccount from '../components/AdminAccount';

const mockAdmin = {
  id: 'admin123',
  photo: 'https://randomuser.me/api/portraits/men/75.jpg',
  role: 'Administrator'
};

const AdminDashboardPage = () => {
  const [patientCount, setPatientCount] = useState(120);
  const [doctorCount, setDoctorCount] = useState(15);
  const [totalUsers, setTotalUsers] = useState(135); // Added totalUsers state

  // State to hold the info to display
  const [info, setInfo] = useState(null);

  // Handler for Appointment Today click
  const handleAppointmentClick = () => {
    const randomAppointments = Math.floor(Math.random() * 46) + 5;
    setInfo(`Total no of appointments for today: ${randomAppointments}`);
  };

  // Handler for Total Users click
  const handleTotalUsersClick = () => {
    setInfo(`Total number of users: ${totalUsers}`);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5' }}>
      {/* Pass both click handlers to the sidebar */}
      <AdminSidebar 
        onAppointmentClick={handleAppointmentClick}
        onTotalUsersClick={handleTotalUsersClick}
      />
      
      <main style={{ flex: 1, padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <AdminAccount admin={mockAdmin} />
        <AdminSummaryBoxes patientCount={patientCount} doctorCount={doctorCount} />
        
        {/* Show info if available */}
        {info && (
          <div style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            fontSize: "1.3rem",
            color: "#333",
            textAlign: "center"
          }}>
            {info}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboardPage;
