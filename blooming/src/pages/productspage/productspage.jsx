import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Productcarousel from "./cardproductcarousel";
import "./productspage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const Productspage = () => {
  const { category_name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get(`http://localhost:4001/api/product?category_name=${category_name}`)
        .then((res) => {
          setProducts(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setProducts([]);
        });
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="title-product">{category_name}</h2>
      <div>
        <Productcarousel products={products} category_name={category_name} />
      </div>
    </div>
  );
};

export default Productspage;
