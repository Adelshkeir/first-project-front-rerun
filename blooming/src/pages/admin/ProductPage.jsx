import ProductCard from "../../components/productCard/productCard.jsx";
import AddIcon from "../../assets/Add-Icon.png";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import AddProductForm from "../../components/addProductForm/addProductForm.jsx";
import EditProductForm from "../../components/editProductForm/editProductForm.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryPage.css";
// import './sidebar.css'

const ProductsPage = () => {
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const [refreshProductPage, setRefreshProductPage] = useState("");

  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:4000/api/product");
    console.log("response l product", response.data);
    setProduct(response.data);
  };


 

  const handleChangeProduct = (productObject) => {
    setSingleProduct(productObject);
    setEditOpen(true);
    console.log("edited Product", productObject);
  };

  const refPage = (refresh) => {
    setRefreshProductPage(refreshProductPage + refresh);
  };

  useEffect(() => {
    fetchProduct();
  }, [refreshProductPage]);
  return (
    <>
      <Sidebar />
      {isOpen && <AddProductForm setIsOpen={setIsOpen} refresh={refPage} />}
      {isEditOpen && (
        <EditProductForm
          setEditOpen={setEditOpen}
          singleProduct={singleProduct}
          refresh={refPage}
        />
      )}
      <div onClick={() => setIsOpen(true)} className="add-button-icon">
        <img src={AddIcon} />
      </div>
      <div className="category-cards">
        {product.map((eachProduct) => (
          <ProductCard
            key={eachProduct.id}
            product={eachProduct}
            handleChangeProduct={handleChangeProduct}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
