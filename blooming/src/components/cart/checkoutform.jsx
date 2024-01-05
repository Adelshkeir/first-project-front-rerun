import React, { useState } from 'react';
import axios from 'axios';


const CheckoutForm = ({ onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phonenumber: "",
    date: "",
  });

  const handleChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Validate that the cart is not empty or handle accordingly
    if (cartItems.length === 0) {
      console.log("Cart is empty. Please add items to the cart before checking out.");
      return;
    }

    try {
      // Send a POST request to the backend to create an order
      const response = await axios.post(
        'http://localhost:4000/api/orders',
        {
          name: customerInfo.name,
          phonenumber: customerInfo.phonenumber,
          date: customerInfo.date,
          cart: cartItems,
        }
      );

      console.log("Order placed successfully:", response.data);
      onClose();
    } catch (error) {
      console.error("Error placing the order:", error);
      // Handle error and inform the user
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>

        <form onSubmit={handleCheckout} className='Campaign-Edit-Form'>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone number:</label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={customerInfo.phonenumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Order Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={customerInfo.date}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Checkout</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
