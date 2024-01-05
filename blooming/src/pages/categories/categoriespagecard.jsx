import React from "react";
import "./categoriespage.css";
import { Link } from 'react-router-dom';
const Categorypagecard = ({data}) => {
  return (
    <Link to={`/products/${data.category_name}`} style={{ textDecoration: 'none' }}>
    <div className="categorycardcontainer">
      <div>
        <img src={`http://localhost:4001/${data.category_image}`} />
      </div>
      <p>{data.category_name}</p>
    </div>
    </Link>
  );
};

export default Categorypagecard;
