import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Productcarousel from "./cardproductcarousel";
import "./productspage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
const Productspage = () => {
  const { category_name } = useParams();
  const [products, setProducts] = useState([]);
  const { admin } = useAuthContext();
  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get(`http://localhost:4000/api/product?category_name=${category_name}`,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        })
        .then((res) => {
          setProducts(res.data);
          console.log("this is the response",res);
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
