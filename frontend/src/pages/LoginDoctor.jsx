import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoctorLogo from '../assets/Doctorlogo.jpg';

// SVG icon for the right side (you can replace with your own if needed)
const HealthHandIcon = () => (
  <svg width="120" height="120" viewBox="0 0 64 64" fill="none">
    <circle cx="48" cy="32" r="32" fill="#74d8d4"/>
    <path d="M46 24c0-3.3-2.7-6-6-6-2.5 0-4.7 1.5-5.6 3.7C33.7 19.5 31.5 18 29 18c-3.3 0-6 2.7-6 6 0 6.6 10.6 13 10.6 13S46 30.6 46 24z" fill="#FF7B8A"/>
    <rect x="34" y="22" width="4" height="10" rx="2" fill="#fff"/>
    <rect x="29" y="27" width="14" height="4" rx="2" fill="#fff"/>
  </svg>
);

const LoginDoctor = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard/doctor");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid credentials. Please try again."
      );
    }
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#fff"
    }}>
      {/* Left: Login Form */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "600",
          marginBottom: "2.5rem",
          letterSpacing: "0.02em"
        }}>Sign In</h1>
        <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: 400 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "#eaeaea",
            borderRadius: 25,
            padding: "0.85rem 1.2rem",
            marginBottom: "1.5rem"
          }}>
            <span style={{ marginRight: 12, color: "#888" }}>✉️</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: "1.1rem",
                flex: 1
              }}
            />
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "#eaeaea",
            borderRadius: 25,
            padding: "0.85rem 1.2rem",
            marginBottom: "2rem"
          }}>
            <span style={{ marginRight: 12, color: "#888" }}>🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: "1.1rem",
                flex: 1
              }}
            />
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>{error}</div>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.85rem",
              background: "#74d8d4",
              color: "#222",
              border: "none",
              borderRadius: 25,
              fontSize: "1.25rem",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "1.5rem"
            }}
          >
            Login
          </button>
        </form>
      </div>
      {/* Right: Logo and App Name */}
      <div style={{
        flex: 1,
        width:350,
        background: "#74d8d4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: "50% 100%",
        borderBottomLeftRadius: "50% 100%",
      }}>
        <div style={{ marginBottom: 30 }}>
          <img
            src={DoctorLogo}
            alt="Doctor Logo"
            style={{ width: 120, height: 120 }}
          />
        </div>
        <div style={{
          fontSize: "2.1rem",
          fontWeight: "bold",
          color: "#222",
          letterSpacing: "0.06em"
        }}>Medismart</div>
      </div>
    </div>
  );
};

export default LoginDoctor;
