import React from "react";
import wpc from "../../assets/Cakes.png";
import "./productspage.css";
import { Link } from 'react-router-dom';




const CardProduct = ({ product }) => {
  console.log(product);
  return (
    <Link
      to={`/Singleproductpage/${product.id}`}
      style={{ textDecoration: "none" }}
    >
      <div>
        <section className="cakes">
          <div className="cake-card">
            <img src={`http://localhost:4000/${product.image}`} />
            <h3>{product.product_name}</h3>
            <span className="price-products">$20</span>
            <p>{product.description}</p>
          </div>
        </section>
      </div>
    </Link>
  );
};

export default CardProduct;
