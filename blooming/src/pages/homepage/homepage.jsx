import react from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import HomeCarousel from "../../components/homepagecarousel/homepagecarousel.jsx";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
    </div>
  );
};

export default HomePage;