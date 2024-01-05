import "./cart.css"
// CartPopup.js
import React, { useState, useEffect } from 'react';

const CartPopup = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);


  return (
    <div className="custom-popup">
      <div className="cart-popup-content">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - Quantity: {item.quantity}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
