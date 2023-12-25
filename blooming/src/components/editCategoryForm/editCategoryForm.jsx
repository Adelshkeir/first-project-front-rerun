import { useState, useEffect } from 'react'
import axios from 'axios';
import "./editCategoryForm.css"
// 5 here we are setting the data to single category which is the object (each,category,obj and now singleCategory)
const EditCategoryForm = ({refresh,setIsOpen,singleCategory}) => {
  const [data, setData] = useState(singleCategory);

  useEffect(() =>{

    setData(singleCategory);
  },[singleCategory]);

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("category_name", data.category_name);
      fData.append("date", data.date);
      fData.append("category_image", data.category_image);

      const response = await axios.put(
        `http://localhost:4000/api/category/${data.id}`,
        fData
      );
      console.log(response);
      refresh("a")
      setIsOpen(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container-edit-category">
      <form onSubmit={handleEditCategory} className="hello">
        <div className="flex flex-col mb-4">
          <label className="block text-main text-lg mb-2">
            Category Name
            {/* 2 */}
            <input
              type="text"
              value={data.category_name ||  ""}
              onChange={(e) => {
                setData({ ...data, category_name: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="flex flex-col mb-4">
      
        <img src={`http://localhost:4000/${data.category_image}`} width={"200px"} alt={data.id} />
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
              value={data.date}
              onChange={(e) => {
                setData({ ...data, date: e.target.value });
              }}
            />
          </label>
        </div>
        <button type="submit">Edit</button>
        
        <button onClick={()=>{setIsOpen(false)}}>Cancel</button>

        
      </form>
    </div>
  )
}

export default EditCategoryForm