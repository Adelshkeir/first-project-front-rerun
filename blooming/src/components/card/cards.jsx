import "./cards.css";
import EditIcon from "../../assets/Edit-Icon.png";
import DeleteIcon from "../../assets/Delete-Icon.png";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

// 2 receiving category props from category page (from parent to child) in order to access the object keys in their specified location
const cards = ({ category, handleChangeObject, refresh }) => {
  const admin = useAuthContext();

  const deleteCategory = async (id) => {
    if (!admin) {
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:4001/api/category/${category.id}`,
        {
          headers: {
            Authorization: `Bearer ${admin.admin.token}`,
          },
        }
      );
      console.log(response.data);
      refresh("a");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img
            className="cake-main-image"
            src={`http://localhost:4001/${category.category_image}`}
          />
        </div>
        <div className="card-title">{category.category_name}</div>
        <div className="card-subtitle">{category.date}</div>
        <hr className="card-divider" />
        <div className="card-footer">
          <div className="card-price">
            <span className="edit-span">
              {/* 3 passing handleChangeObject to the parent so when pressing on the button it will fire the function declared in the parent component with category as parameter which is the object (each,category (both are the same)) */}
              <button>
                <img
                  onClick={() => {
                    handleChangeObject(category);
                  }}
                  src={EditIcon}
                />
              </button>
            </span>
            <span className="delete-span">
              <button>
                <img
                  onClick={() => deleteCategory(category.id)}
                  src={DeleteIcon}
                />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
