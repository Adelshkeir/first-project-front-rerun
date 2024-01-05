import HomePage from "./pages/homepage/homepage.jsx";
import Categoriespage from "./pages/categories/categoriespage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Singleproductpage from "./pages/singleproductpage/singleproductpage.jsx";
import Aboutus from "./pages/about-us/about-us.jsx";
import Productspage from "./pages/productspage/productspage.jsx";
import "./main.css";
import AdminPage from "./pages/admin/AdminPage.jsx";
import Category from "./pages/admin/CategoryPage.jsx";
import Product from "./pages/admin/ProductPage.jsx";
import Signup from "./pages/signUp.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import { useValue } from "./context/googleAuthContext.jsx";

function App() {
  const { value } = useValue();
  const { admin } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Categories" element={<Categoriespage />}></Route>
        <Route
          path="/Singleproductpage"
          element={<Singleproductpage />}
        ></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/products" element={<Productspage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route
          path="/category"
          element={admin || value ? <Category /> : <Navigate to="/admin" />}
        ></Route>
        <Route
          path="/product"
          element={admin || value ? <Product /> : <Navigate to="/admin" />}
        ></Route>
        <Route path="/register" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
