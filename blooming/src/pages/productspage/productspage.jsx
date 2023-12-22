import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import Productcarousel from '../../components/cardProductCarousel'

import './productspage.css';


const Productspage = () => {
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

export default Productspage;
