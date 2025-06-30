// src/pages/Appointment.jsx
import React from "react";
import { doctors } from "../Doctors";

const DoctorCard = ({ doctor }) => (
  <div style={{
    background: "#f5f5f5",
    borderRadius: 18,
    padding: "1.5rem",
    margin: "1rem",
    maxWidth: 320,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)"
  }}>
    <img
      src={doctor.image}
      alt={doctor.name}
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "1rem",
        border: "3px solid #7ee1db"
      }}
    />
    <h3 style={{ margin: "0.5rem 0", fontSize: "1.25rem" }}>{doctor.name}</h3>
    <p style={{ color: "#555", marginBottom: "1.2rem" }}>{doctor.degree}</p>
    <button
      style={{
        background: "#7ee1db",
        color: "#222",
        border: "none",
        borderRadius: 20,
        padding: "0.7rem 1.5rem",
        fontWeight: "bold",
        fontSize: "1rem",
        cursor: "pointer"
      }}
      onClick={() => alert(`Checking availability for ${doctor.name}`)}
    >
      Check Availability
    </button>
  </div>
);

export default function Appointment() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#fff",
      padding: "3rem 0"
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "2.3rem",
        fontWeight: "bold",
        marginBottom: "2rem"
      }}>
        Book an Appointment with Our Doctors
      </h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {doctors.map(doc => (
          <DoctorCard doctor={doc} key={doc.id} />
        ))}
      </div>
    </div>
  );
}
