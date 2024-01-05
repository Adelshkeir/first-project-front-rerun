import Navbar from "../../components/navbar/Navbar";
import "./categoriespage.css";

import Categorycarousel from "./categorycarousel";
const Categoriespage = () => {
  return (
    <div className="Categories-main">
      <Navbar />

      <h1 className="Categories-header">What We Offer</h1>

      <h5 className="Categories-second-header">
        Discover Your Perfect Dessert Getaway
      </h5>

      <Categorycarousel />
    </div>
  );
};

export default Categoriespage;
