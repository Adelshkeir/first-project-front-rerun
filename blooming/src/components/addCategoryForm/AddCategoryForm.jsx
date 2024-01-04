import React from "react";
import "./AddCategoryForm.css";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

const AddForm = ({ refresh, setIsOpen }) => {
  //category object (1)
  //jebna el category object ta n3abbi
  const [data, setData] = useState({
    category_name: " ",
    category_image: null,
    date: null,
  });
  const [error, setError] = useState(null);
  const {admin} = useAuthContext()

  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (!admin) {
      setError("You must be logged in");
      return;
    }

    try {
      const fData = new FormData();
      fData.append("category_name", data.category_name);
      fData.append("date", data.date);
      fData.append("category_image", data.category_image);

      const response = await axios.post(
        "http://localhost:4000/api/category",
        fData,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );
      console.log(response);
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
    }
  };

  return (
    <div className="form-container-category">
      <form onSubmit={handleAddCategory} className="form-submit-category">
        <div className="inputs-container">
          <div className="input-label-container-category">
            <label className="label-category">
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

          <div className="input-label-container-category">
            <label className="label-category">
              Category Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, category_image: e.target.files[0] });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-category">
            <label className="label-category">
              Date
              <input
                type="date"
                value={data.date || ""}
                onChange={(e) => {
                  setData({ ...data, date: e.target.value });
                }}
              />
            </label>
          </div>
        </div>
        <div className="category-buttons-container">
          <div className="cancel-category-1">
            <button
              className="cancel-button-category"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-category-1">
            <button className="add-button-category" type="submit">
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
