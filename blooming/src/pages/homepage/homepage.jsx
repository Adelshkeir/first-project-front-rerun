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
      <footer className="main-footer">
          
          <div className="blooming-logo">
            {/* <img src={Blooming} /> */}
          </div>
            <div className="quick-links-1">
              <p>facebook</p>
              <p>facebook</p>
              <p>facebook</p>
              <div className="rights">
              <p>Blooming &copy; 2023, All Rights Reserved</p>
              </div>
            </div>
            <div className="quick-links-2">
              <p>facebook</p>
              <p>facebook</p>
              <p>facebook</p>

            </div>
            
        </footer>
    </div>
  );
};

export default HomePage;
