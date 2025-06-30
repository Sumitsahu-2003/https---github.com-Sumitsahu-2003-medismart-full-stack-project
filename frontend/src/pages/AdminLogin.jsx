import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLogo from '../assets/AdminLogo.jpg';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Start loading
    
    try {
      // Send credentials with proper headers
     
      const response = await axios.post(
        
        "http://localhost:5000/api/auth/admin/login",
        
        { email, password },
        {
          headers: {
            "Content-Type": "application/json" // REQUIRED HEADER
          }
        }
      );
      
      
      // Verify token exists in response
      if (!response.data.token) {
        throw new Error("No token received from server");
      }
      
      // Store admin token
      localStorage.setItem("adminToken", response.data.token);
      
      // Redirect to admin dashboard
      navigate("/dashboard/admin");
    } catch (err) {
      console.error("Admin login error:", err); // Detailed error logging
      setError(
        err.response?.data?.message || 
        err.message || 
        "Admin login failed"
      );
    } finally {
      setLoading(false); // End loading
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
        }}>Admin Sign In</h1>
        <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: 400 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "#eaeaea",
            borderRadius: 25,
            padding: "0.85rem 1.2rem",
            marginBottom: "1.5rem"
          }}>
            <span style={{ marginRight: 12, color: "#888" }}>👑</span>
            <input
              type="email"
              placeholder="Admin Email"
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
            disabled={loading} // Disable when loading
            style={{
              width: "100%",
              padding: "0.85rem",
              background: loading ? "#6a0080" : "#9c27b0", // Darker when loading
              color: "#fff",
              border: "none",
              borderRadius: 25,
              fontSize: "1.25rem",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              marginBottom: "1.5rem",
              transition: "background 0.3s ease"
            }}
          >
            {loading ? "Logging in..." : "Admin Login"}
          </button>
        </form>
      </div>
      {/* Right: Logo and App Name */}
      <div style={{
        flex: 1,
        background: "#9c27b0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: "50% 100%",
        borderBottomLeftRadius: "50% 100%",
      }}>
        <div style={{ marginBottom: 30 }}>
          <img
            src={AdminLogo}
            alt="Admin Logo"
            style={{ width: 120, height: 120 }}
          />
        </div>
        <div style={{
          fontSize: "2.2rem",
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: "0.03em"
        }}>Admin Portal</div>
      </div>
    </div>
  );
};

export default AdminLogin;
