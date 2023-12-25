import Card from "../../components/card/cards.jsx";
import AddIcon from "../../assets/Add-Icon.png";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import { useState, useEffect } from "react";
import AddForm from "./AddForm.jsx";
import EditCategoryForm from "../../components/editCategoryForm/editCategoryForm.jsx";
import axios from "axios";
import "./CategoryPage.css";
// import './sidebar.css'

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleCategory, setSingleCategory] = useState({});

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:4000/api/category");
    console.log("hayde el response", response.data);
    setCategories(response.data);
  };

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

  // obj is the category object that we are catching while onClick on Edit button(card component)
  // 4 in this function we are setting the single category to (obj) which is (each,category) but with a different parameter name noting that i can name it whatever i want so now after setting it we want to use singleCategory in the edit form
  const handleChangeObject = (obj) => {
    setSingleCategory(obj);
    setOpenEditForm(true);
    console.log("editedObject", obj);
  };

  useEffect(() => {
    fetchCategories();
  }, [refreshPage]);

  return (
    <>
      <Sidebar />
      {open && <AddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <EditCategoryForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleCategory={singleCategory}
        />
      )}

      <div onClick={() => setOpen(true)} className="add-button-icon">
        <img src={AddIcon} />
      </div>
      <div className="category-cards">
        {categories.map((each) => (
          // 1 passing l each as category to the card component (from parent to child) + handleChangeObject to use onClick
          <Card
            key={each.id}
            category={each}
            handleChangeObject={handleChangeObject}
          />
        ))}
      </div>
    </>
  );
};

export default CategoriesPage;
