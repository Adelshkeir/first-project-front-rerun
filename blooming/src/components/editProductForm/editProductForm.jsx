import { useState, useEffect } from "react";
import axios from "axios";
import "./editProductForm.css";

const EditProductForm = ({ setEditOpen, singleProduct, refresh }) => {
  const [category, setCategory] = useState("");
  const [productCategory, setProductCategory] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/category");
      console.log("hayde el response", response.data);
      setProductCategory(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const allcategories = productCategory.map(
    (category) => category.category_name
  );


  const [data, setData] = useState(singleProduct);

  useEffect(() => {
    setData(singleProduct);
  }, [singleProduct]);

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("product_name", data.product_name);
      fData.append("description", data.description);
      fData.append("flavours", data.flavours);
      fData.append("price", data.price);
      fData.append("image", data.image);
      fData.append("bestSeller", data.bestSeller);
      fData.append("category_name", data.category_name);

      const response = await axios.put(
        `http://localhost:4000/api/product/${data.id}`,
        fData
      );
      console.log(response);
      refresh("a");
      setEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data.Category.category_image)
  return (
    <div className="form-container-edit-product">
      <form className="form-edit-category" onSubmit={handleEditProduct}>
        <div className="inputs-container-edit">
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Name
              {/* 2 */}
              <input
              // value: the data shown on the form same as data on the card (filled automatically)
                type="text"
                value={data.product_name || ""}
                onChange={(e) => {
                  setData({ ...data, product_name: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
            Category:
            
            <select
              value={data.Category.category_name || ""}
              onChange={(e) => setCategory( e.target.value)}
              required
              className="option-category"
            >
              <option value="">Select a category</option>
              {allcategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            </label>
          </div>
          <div className="input-label-container-product-edit">
          <img
              src={`http://localhost:4000/${data.image}`}
              width={"200px"}
              alt={data.id}
            />
            
            </div>
           
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, image: e.target.files[0] });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Description
              <input
                type="text"
                value={data.description || ""}
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Flavours
              <input
                type="text"
                value={data.flavours || ""}
                onChange={(e) => {
                  setData({ ...data, flavours: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Price
              <input
                type="text"
                value={data.price || ""}
                onChange={(e) => {
                  setData({ ...data, price: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Best Seller
              <input
                type="text"
                value={data.bestSeller || ""}
                onChange={(e) => {
                  setData({ ...data, bestSeller: e.target.value });
                }}
              />
            </label>
          </div>
        </div>
        <div className="product-buttons-container">
          <div className="cancel-product-1">
            <button
              className="cancel-button-product"
              onClick={() => {
                setEditOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-product-1">
            <button className="add-button-product" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
