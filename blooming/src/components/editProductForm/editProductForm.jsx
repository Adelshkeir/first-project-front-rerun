import { useState, useEffect } from "react";
import axios from "axios";
import "./editProductForm.css";

const EditProductForm = ({ setEditOpen, singleProduct, refresh }) => {
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
      refresh("a")
      setEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formz-container-123">
      <form className="hello" onSubmit={handleEditProduct}>
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
            <input
              type="text"
              value={data.Category.category_name || ""}
              onChange={(e) => {
                setData({
                  ...data,
                  Category: { ...data.Category, category_name: e.target.value },
                });
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
        <button
          onClick={() => {
            setEditOpen(false);
          }}
        >
          Cancel
        </button>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditProductForm;
