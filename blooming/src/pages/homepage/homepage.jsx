import react from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import HomeCarousel from "../../components/homepagecarousel/homepagecarousel.jsx";
import "./homepage.css";
import Whatweoffer from "./homepage-whatweoffer.jsx";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <Whatweoffer />
    </div>
  );
};

export default HomePage;
