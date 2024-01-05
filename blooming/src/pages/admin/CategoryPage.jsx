import Card from "../../components/card/cards.jsx";
import AddIcon from "../../assets/Add-Icon.png";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import { useState, useEffect } from "react";
import AddForm from "../../components/addCategoryForm/AddCategoryForm.jsx";
import EditCategoryForm from "../../components/editCategoryForm/editCategoryForm.jsx";
import axios from "axios";
import "./CategoryPage.css";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleCategory, setSingleCategory] = useState({});
  const { admin } = useAuthContext();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("http://localhost:4001/api/category", {
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      });
      console.log("hayde el response", response.data);
      setCategories(response.data);
    };
    if (admin) {
      fetchCategories();
    }
  }, [refreshPage, admin]);

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

  return (
    <div className="category-page-container">
      <Sidebar />
      {open && <AddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <EditCategoryForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleCategory={singleCategory}
        />
      )}

      <div className="add-button-icon">
        <button onClick={() => setOpen(true)}>
          <img src={AddIcon} />
        </button>
      </div>
      <div className="category-cards">
        {categories.map((each) => (
          // 1 passing l each as category to the card component (from parent to child) + handleChangeObject to use onClick
          <Card
            key={each.id}
            category={each}
            handleChangeObject={handleChangeObject}
            refresh={refPage}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
