import "./cart.css";
// CartPopup.js
import React, { useState, useEffect } from "react";
import CheckoutForm from "./checkoutform";
const CartPopup = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false); // Add this line

  const handleCheckoutClick = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div className="custom-popup">
      <div className="cart-popup-content">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
        <button onClick={handleCheckoutClick}>Checkout</button>

        {isCheckoutModalOpen && (
          <CheckoutForm onClose={handleCloseCheckoutModal} />
        )}
      </div>
    </div>
  );
};

export default CartPopup;
