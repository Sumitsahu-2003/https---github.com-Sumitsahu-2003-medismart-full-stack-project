// src/pages/patient/PatientLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call your backend API for patient login
      const response = await axios.post(
        "http://localhost:5000/api/auth/patient/login", // Adjust if your endpoint differs
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Check if token is present
      if (!response.data.token) {
        throw new Error("No token received from server");
      }

      // Store token in localStorage
      localStorage.setItem("patientToken", response.data.token);

      // Redirect to patient dashboard
      navigate("/patient/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#f7f7f7",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "15px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          width: "100%",
          maxWidth: "340px"
        }}
      >
        <h2 style={{
          marginBottom: "2rem",
          textAlign: "center",
          color: "#1976d2"
        }}>Patient Login</h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none"
            }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none"
            }}
          />
        </div>
        {error && (
          <div style={{
            color: "red",
            marginBottom: "1rem",
            textAlign: "center",
            fontSize: "0.95rem"
          }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.85rem",
            background: loading ? "#1976d2cc" : "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "1rem",
            transition: "background 0.3s"
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default PatientLogin;
