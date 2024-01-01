import "./addProductForm.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

//if category not found alert... + check other functionalities

// 1st bring the product object
// 2nd assign the values to the inputs
// 3rd create a function to handleAddForm with form data (key, value) + fetch

const AddForm = ({ setIsOpen, refresh }) => {
  const [category, setCategory] = useState("");
  const [productCategory, setProductCategory] = useState([]);

  const [error, setError] = useState(null);
  const {admin} = useAuthContext()

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/category",
      {
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      });
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

  const [data, setData] = useState({
    product_name: " ",
    description: " ",
    flavours: " ",
    price: " ",
    image: null,
    bestSeller: true,
    category_name: null,
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!admin) {
      setError("You must be logged in");
      return;
    }
    try {
      const fData = new FormData();
      fData.append("product_name", data.product_name);
      fData.append("description", data.description);
      fData.append("flavours", data.flavours);
      fData.append("price", data.price);
      fData.append("image", data.image);
      fData.append("bestSeller", data.bestSeller);
      fData.append("category_name", category);

      const fetchedProduct = await axios.post(
        "http://localhost:4000/api/product",
        fData,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );
      console.log(fetchedProduct);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      // Check if the response status is 400
      if (error.response && error.response.status === 400) {
        // Display the error message to the user
        alert(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }}

  return (
    <div className="form-container-product">
      <form onSubmit={handleAddProduct} className="form-submit-product">
        <div className="inputs-container">
          <div className="input-label-container-product">
            <label className="label-product">
              Product Name
              {/* 2 */}
              <input
                type="text"
                value={data.product_name || ""}
                onChange={(e) => {
                  setData({ ...data, product_name: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-1">
            <label className="label-product" htmlFor="ProductName">
              Category:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
          </div>
          <div className="input-label-container-product">
            <label className="label-product">
              Product Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, image: e.target.files[0] });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product">
            <label className="label-product">
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
          <div className="input-label-container-product">
            <label className="label-product">
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
          <div className="input-label-container-product">
            <label className="label-product">
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
          <div className="input-label-container-product">
            <label className="label-product">
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
        {/* <div className="input-label-container-product">
          <label className="label-product">
            Date
            <input
              type="text"
              value={data.date || ""}
              onChange={(e) => {
                setData({ ...data, date: e.target.value });
              }}
            />
          </label>
        </div> */}
        <div className="product-buttons-container">
          <div className="cancel-product-1">
            <button
              className="cancel-button-cproduct"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-product-1">
            <button className="add-button-product" type="submit">
              Add
            </button>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
