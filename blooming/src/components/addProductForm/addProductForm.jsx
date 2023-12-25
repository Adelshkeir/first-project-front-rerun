import "./addProductForm.css";
import { useState } from "react";
import axios from "axios";


//if category not found alert... + check other functionalities


// 1st bring the product object
// 2nd assign the values to the inputs
// 3rd create a function to handleAddForm with form data (key, value) + fetch

const AddForm = ({ setIsOpen, refresh }) => {
  const [data, setData] = useState({
    product_name: "alicopter",
    description: "ayashi",
    flavours: "mafina n2oul",
    price: "arkhas shi",
    image: null,
    bestSeller: true,
    category_name: null,
  });

  const handleAddProduct = async (e) => {
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

      const fetchedProduct = await axios.post(
        "http://localhost:4000/api/product",
        fData
      );
      console.log(fetchedProduct);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };
   

  return (
    <div className="form-container-product">
      <form onSubmit={handleAddProduct} className="hello">
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
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
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">

            category Name
            
            <input type="text" 
              value={data.category_name || ""}
              onChange={(e) => {
                setData({ ...data, category_name: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
            Product Image
            <input
              type="file"
              onChange={(e) => {
                setData({ ...data, image: e.target.files[0] });
              }}
            />
          </label>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
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
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
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
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
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
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
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
        {/* <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
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
        <button type="submit">add</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default AddForm;
