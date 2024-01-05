import { useState, useEffect } from "react";
import axios from "axios";
import "./editCategoryForm.css";
import { useAuthContext } from "../../hooks/useAuthContext";
// 5 here we are setting the data to single category which is the object (each,category,obj and now singleCategory)
const EditCategoryForm = ({ refresh, setIsOpen, singleCategory }) => {
  const [data, setData] = useState(singleCategory);
  const { admin } = useAuthContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(singleCategory);
  }, [singleCategory]);

  const handleEditCategory = async (e) => {
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

      const response = await axios.put(
        `http://localhost:4001/api/category/${data.id}`,
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
      console.log(error);
    }
  };

  console.log("el image", data.category_image);

  return (
    <div className="form-container-edit-category">
      <form onSubmit={handleEditCategory} className="form-edit-category">
        <div className="inputs-container-edit">
          <div className="input-label-container-category-edit">
            <label className="label-category-edit">
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
          <div className="input-label-container-category-edit">
            <img
              src={`http://localhost:4001/${data.category_image}`}
              width={"200px"}
              alt={data.id}
            />
          </div>
          <div className="input-label-container-category-edit">
            <label className="label-category-edit">
              Category Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, category_image: e.target.files[0] });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-category-edit">
            <label className="label-category-edit">
              Date
              <input
                type="text"
                value={data.date}
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
              Edit
            </button>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCategoryForm;
