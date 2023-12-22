import React from 'react'




  
function CardProduct({data}) {
  return (
    <div>
       <section className="cakes">
          
          <div className="cake-card">
            <img src={`http://localhost:4001/${data.images}`}alt="Strawberry cake with fresh strawberries" />
            <h3>{data.productName}</h3>
            <span className='price-products'>{data.price}</span>
            <p>{data.flavours}</p>
            <p>{data.description}</p>
          </div>
        </section>
       

    </div>
  )
}

export default CardProduct


