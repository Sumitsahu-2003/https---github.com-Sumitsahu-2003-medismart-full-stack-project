import React from 'react';
import { useCart } from '../../context/CartContext';

const MedicineCard = ({ medicine }) => {
  const { addToCart } = useCart();

  return (
    <div className="medicine-card">
      <img src={medicine.image} alt={medicine.name} />
      <h3>{medicine.name}</h3>
      <p>{medicine.description}</p>
      <div className="medicine-footer">
        <span>₹{medicine.price}</span>
        <button onClick={() => addToCart(medicine)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MedicineCard;
