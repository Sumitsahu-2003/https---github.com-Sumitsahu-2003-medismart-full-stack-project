import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DoctorCategories from "./components/DoctorCategories";
import AboutUs from "./components/Aboutus"; // Make sure the case matches your file
import PredictionCards from "./components/PredictionCards";
import FAQ from "./components/FAQ";
import HealthRecords from "./pages/HealthRecords";
import Profile from "./pages/Profile";
import './App.css'; // or './index.css' if using Tailwind
import Register from './pages/Register';
import Login from './pages/Login'; 
import LoginDoctor from './pages/LoginDoctor';
import PatientLogin from './pages/PatientLogin';
import AdminLogin from './pages/AdminLogin';
import Appointment from './pages/Appointment';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { CartProvider } from './context/CartContext';
import PatientDashboard from './pages/Patient/PatientDashboard';
import EPrescription from './pages/Patient/EPrescription';
import TestResults from './pages/Patient/TestResults';
import EMedicine from './pages/Patient/EMedicene';
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 to-teal-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <DoctorCategories />
        <AboutUs />
        <PredictionCards />
        <FAQ />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/records" element={<HealthRecords />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/doctor" element={<LoginDoctor />} />
      <Route path="/login/patient" element={<PatientLogin />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/patient/e-prescription" element={<EPrescription />} />
     <Route path="/patient/test-results" element={<TestResults />} />
  <Route 
    path="/patient/e-medicine" 
    element={
      <CartProvider>
        <EMedicine />
      </CartProvider>
    } 
  />

    </Routes>
  );
}

export default App;
