// import React from 'react'
// import axios from 'axios';
// import wpc from '../assets/wepik-export-20231215143736pQJ1.png';
// import { useState,useEffect } from 'react';



  
// function CardProduct() {
//   const [productName,setProductName] =useState("");
//   const[description, setDescription] = useState("");
//   const[price, setPrice] = useState("");
//   const[falvours, setfalvours] = useState("");
//   const[images, setImages] = useState("");
//   const[bestSeller, setBestSeller] = useState("");
  

//   return (
//     <div>
//        <section className="cakes">
          
//           <div className="cake-card">
//             <img src={wpc} alt="Strawberry cake with fresh strawberries" />
//             <h3>Strawberry Shortcake</h3>
//             <span className='price-products'>$20</span>
//             <p>Fresh strawberries in a moist vanilla base with whipped cream and a drizzle of chocolate sauce.</p>
//             <p>"Delicious treats! The cakes are always fresh and flavorful." - Moussa Wehbi</p>
//           </div>
//         </section>
       

//     </div>
//   )
// }

// export default CardProduct
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import wpc from '../assets/wepik-export-20231215143736pQJ1.png';
// const [productName,setProductName] =useState("");
//   const[description, setDescription] = useState("");
//   const[price, setPrice] = useState("");
//   const[falvours, setfalvours] = useState("");
//  const[images, setImages] = useState("");
//  const[bestSeller, setBestSeller] = useState("");

function CardProduct() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8100/api/products');
  //       console.log("res",response.data.data);

  //       setData(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching profile data:', error);
  //     }
  //   };

  //   fetchProfileData();
  // }, []);

  return (
    <div>
      <section className="cakes">
        <div className="cake-card">
          {data.map(d => (
            <div key={d.id}>
             <img src={`http://localhost:4001/${d.images}`} alt="Strawberry cake with fresh strawberries" />

              <h3>{d.productName}</h3>
              <span className='price-products'>{d.price}</span>
              <p>{d.falvours}</p>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CardProduct;

