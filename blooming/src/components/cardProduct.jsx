import React from 'react'

import wpc from '../assets/wepik-export-20231215143736pQJ1.png';



  
function CardProduct() {
  return (
    <div>
       <section className="cakes">
          
          <div className="cake-card">
            <img src={wpc} alt="Strawberry cake with fresh strawberries" />
            <h3>Strawberry Shortcake</h3>
            <span className='price-products'>$20</span>
            <p>Fresh strawberries in a moist vanilla base with whipped cream and a drizzle of chocolate sauce.</p>
            <p>"Delicious treats! The cakes are always fresh and flavorful." - Moussa Wehbi</p>
          </div>
        </section>
       

    </div>
  )
}

export default CardProduct
