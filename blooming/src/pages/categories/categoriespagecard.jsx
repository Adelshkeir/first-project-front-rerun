import React from "react";
import "./categoriespage.css";

const Categorypagecard = ({data}) => {
  return (
    <div className="campaigncardcontainer">
      <div>
        <img src={`http://localhost:4001/${data.category_image}`} />
      </div>
      <p>{data.category_name}</p>
    </div>
  );
};

export default Categorypagecard;
