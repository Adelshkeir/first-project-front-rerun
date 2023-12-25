import React from "react";
import "./AddForm.css";
import { useState } from "react";
import axios from "axios";

const AddForm = ({ refresh, setIsOpen }) => {
  //category object (1)
  //jebna el category object ta n3abbi
  const [data, setData] = useState({
    category_name: "alicopter",
    category_image: null,
    date: "2023-01-01",
  });

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("category_name", data.category_name);
      fData.append("date", data.date);
      fData.append("category_image", data.category_image);

      const response = await axios.post(
        "http://localhost:4000/api/category",
        fData
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container-">
      <form onSubmit={handleAddCategory} className="hello">
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
            Category Name
            {/* 2 */}
            <input
              type="text"
              value={data.category_name || ""}
              onChange={(e) => {
                setData({ ...data, category_name: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
            Category Image
            <input
              type="file"
              onChange={(e) => {
                setData({ ...data, category_image: e.target.files[0] });
              }}
            />
          </label>
        </div>
        <div className="flex flex-col mb-4">
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
        </div>
        <button type="submit">Add</button>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddForm;
