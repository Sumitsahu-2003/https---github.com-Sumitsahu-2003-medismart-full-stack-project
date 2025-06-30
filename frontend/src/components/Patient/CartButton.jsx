import React from 'react';
import { useCart } from '../../context/CartContext';
import '../../pages/Patient/cartbutton.css';
const CartButton = () => {
  const { cartItems, toggleCart } = useCart();
  
  return (
    <button className="cart-button" onClick={toggleCart}>
      🛒 {cartItems.length > 0 && 
        <span className="cart-badge">{cartItems.length}</span>
      }
    </button>
  );
};

export default CartButton;
