import ProductCard from "../../components/productCard/productCard.jsx";
import AddIcon from "../../assets/Add-Icon.png";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import AddProductForm from "../../components/addProductForm/addProductForm.jsx";
import EditProductForm from "../../components/editProductForm/editProductForm.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductPage.css";
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
    <div className="category-page-container">
      <Sidebar />
      {isOpen && <AddProductForm setIsOpen={setIsOpen} refresh={refPage} />}
      {isEditOpen && (
        <EditProductForm
          setEditOpen={setEditOpen}
          singleProduct={singleProduct}
          refresh={refPage}
        />
      )}
      <div className="add-button-icon">
      <button onClick={() => setIsOpen(true)}  >
        <img src={AddIcon} />
      </button>
      </div>
      <div className="product-cards">
        {product.map((eachProduct) => (
          <ProductCard
            key={eachProduct.id}
            product={eachProduct}
            handleChangeProduct={handleChangeProduct}
            refresh={refPage}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
