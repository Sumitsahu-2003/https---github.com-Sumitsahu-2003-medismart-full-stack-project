import React from 'react';
import { useCart } from '../../context/CartContext';
import './cart.css';
const Cart = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useCart();
  
  if (!isCartOpen) return null;
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={toggleCart} className="close-cart">×</button>
      </div>
      
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price} × {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}  className="remove-btn">Remove</button>
            </div>
          ))
        )}
      </div>
      
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
