import "./cards.css";
import EditIcon from "../../assets/Edit-Icon.png";
import DeleteIcon from "../../assets/Delete-Icon.png";
import axios from "axios";
import { useState } from "react";
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
        `http://localhost:4000/api/category/${category.id}`,
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
            src={`http://localhost:4000/${category.category_image}`}
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
          {/* <button className="card-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
        </button> */}
        </div>
      </div>
      {/* <div className="card">
        <div className="card-img">
        <img className='cake-main-image' src={CakeImageMain}/>
        </div>
        <div className="card-title">Category title</div>
        <div className="card-subtitle">Category description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <hr className="card-divider" />
        <div className="card-footer">
          <div className="card-price"> <span className='edit-span'><img src={EditIcon}/></span> 123.45 $<span className='delete-span'><img src={DeleteIcon}/></span></div>
        </div>
      </div> */}
    </div>
  );
};

export default cards;
