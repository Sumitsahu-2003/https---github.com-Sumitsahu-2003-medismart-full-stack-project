import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputStyle = {
  width: "100%",
  padding: "1rem",
  borderRadius: 20,
  border: "none",
  background: "#eaeaea",
  fontSize: "1.1rem",
  outline: "none",
  color: "#222"
};

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    aadhar: "",
    dob: "",
    gender: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Registering...");
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    if (res.ok) {
      setMsg("Registration successful!");
      // Optionally redirect to login
      setTimeout(() => navigate("/login"), 1500);
    } else {
      setMsg("Registration failed.");
    }
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#fff"
    }}>
      {/* Left: Welcome */}
      <div style={{
        flex: 1,
        background: "#7ee1db",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: "50% 100%",
        borderTopRightRadius: "50% 100%"
      }}>
        <div style={{ textAlign: "center", width: "90%" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Hello, We are Medismart!!
          </h1>
          <div style={{
            width: 60,
            height: 4,
            background: "#222",
            margin: "1rem auto",
            borderRadius: 2
          }} />
          <p style={{ fontSize: "1.3rem", marginBottom: "2.3rem" }}>
            Already Have a Account !!!
          </p>
          <button
            onClick={() => navigate("/login")}
            style={{
              width: 180,
              padding: "0.7rem 0",
              border: "2px solid #222",
              borderRadius: 25,
              background: "#fff",
              color: "#222",
              fontSize: "1.1rem",
              fontWeight: "500",
              marginBottom: "1.2rem",
              cursor: "pointer"
            }}
          >
            Sign In
          </button>
          <br />
          <button
            onClick={() => navigate("/")}
            style={{
              width: 180,
              padding: "0.7rem 0",
              border: "2px solid #222",
              borderRadius: 25,
              background: "#fff",
              color: "#222",
              fontSize: "1.1rem",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            Home
          </button>
        </div>
      </div>
      {/* Right: Register Form */}
      <div style={{
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem 4vw"
      }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>Register</h1>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 900 }}>
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <input
              type="text"
              name="aadhar"
              placeholder="Aadhar No."
              value={form.aadhar}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="date"
              name="dob"
              placeholder="Date Of Birth"
              value={form.dob}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              style={{ ...inputStyle, color: form.gender ? "#222" : "#aaa" }}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              background: "#7ee1db",
              color: "#222",
              border: "none",
              borderRadius: 25,
              fontSize: "1.3rem",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "1rem",
              letterSpacing: "0.03em"
            }}
          >
            REGISTER
          </button>
          {msg && (
            <p style={{ marginTop: "1rem", color: msg.includes("success") ? "green" : "red" }}>{msg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

