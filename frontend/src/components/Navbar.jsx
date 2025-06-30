// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-16 h-16" />
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-8 font-medium">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
        <Link to="/appointment">Appointment</Link>
        </li>
        <li className="cursor-pointer">
        <Link to="/about">About us</Link>
        </li>
        
        <li className="cursor-pointer">Quick Help</li>
        <li className="cursor-pointer">E-Prescription</li>
      </ul>

      {/* Buttons */}
      <div className="space-x-4 flex items-center relative">
        {/* ✅ Fixed path here */}
        <Link to="/register">
          <button className="bg-teal-400 border-2 border-black text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-teal-300 transition">
            REGISTER
          </button>
        </Link>
        
        <button
          className="bg-teal-400 border-2 border-black text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-teal-100 transition relative"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          LOGIN
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-14 text-white mt-2 w-40 bg-teal-200 rounded-xl shadow-lg flex flex-col z-50"
            style={{ minWidth: "8rem" }}
          >
            <Link
              to="/login/patient"
              className="py-2 px-4 hover:bg-teal-300 text-surf text-left rounded-t-xl font-medium"
              onClick={() => setShowDropdown(false)}
            >
              Patient
            </Link>

            <Link
              to="/login/doctor"
              className="py-2 px-4 hover:bg-teal-300 text-surf text-left font-medium"
              onClick={() => setShowDropdown(false)}
            >
              Doctor
            </Link>

            { <Link
              to="/login/admin"
              className="py-2 px-4 hover:bg-teal-300 text-surf text-left rounded-b-xl font-medium"
              onClick={() => setShowDropdown(false)}
            >
              Admin
            </Link> }
          </div>
          
        )}
      </div>
    </nav>
  );
}
