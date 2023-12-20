import react from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import HomeCarousel from "../../components/homepagecarousel/homepagecarousel.jsx";
import wepik from "../../assets/wepik-export-20231215143736pQJ1.png";
import wepik2 from "../../assets/wepik-export-202312151501034xOk.png";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
    </div>
  );
};

export default HomePage;