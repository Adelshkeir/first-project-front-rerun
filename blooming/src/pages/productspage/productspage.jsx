import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import Productcarousel from '../../components/cardProductCarousel.jsx';

import './productspage.css';
import CardProduct from '../../components/cardProduct.jsx'

const productspage = () => {
  return (
    <div>
      <Navbar />
      <h2 className='title-product'>Cakes</h2>
      <div>
<Productcarousel/>
       
      </div>
      <footer className='footer-products'>
        <p>&copy; 2023 Blooming Cakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default productspage;