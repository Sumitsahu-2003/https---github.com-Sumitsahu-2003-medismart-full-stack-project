import React, { useState } from 'react';
import MedicineCard from '../../components/patient/MedicineCard';
import CartButton from '../../components/patient/CartButton';
import Cart from '../../components/patient/Cart';
import paracetamolImg from '../../assets/paracetamol.jpg' ;
import vitaminc from '../../assets/vitamin-c.jpg';
import aspirin from '../../assets/aspirin.jpg';
import ant from '../../assets/antihistamines.jpg';
import  './Emedicene.css';
const EMedicine = () => {
  const [medicines] = useState([
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Pain reliever and fever reducer',
      price: 50,
      image: paracetamolImg
      
    },
    {
      id: 2,
      name: 'Vitamin C',
      description: 'Immune system support',
      price: 150,
      image: vitaminc
    },
    {
      id: 3,
      name: 'Aspirin',
      description: 'Pain reliever and anti-inflammatory',
      price: 80,
      image: aspirin
    },
    {
      id: 4,
      name: 'Antihistamine',
      description: 'Allergy relief',
      price: 120,
      image: ant
    }
  ]);

  return (
    <div className="emedicine-page">
      <header className="emedicine-header">
        <h1>E-Medicine</h1>
        <CartButton />
      </header>
      
      <div className="medicine-grid">
        {medicines.map(medicine => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
      
      <Cart />
    </div>
  );
};

export default EMedicine;
