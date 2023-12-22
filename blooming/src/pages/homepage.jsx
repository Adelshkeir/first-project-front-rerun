import react from "react";
import './homepage.css'
import HomeCarousel from "../components/homepagecarousel";
import Blooming from '../assets/blooming-logo.png'
const HomePage = () => {
  return (
    <div>





      <HomeCarousel />

      Hello






      <>
        {/* Hello world */}
        <footer className="main-footer">
          
          <div className="blooming-logo">
            <img src={Blooming} />
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
      </>



    </div>
  )
};

export default HomePage;
