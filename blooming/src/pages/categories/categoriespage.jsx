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
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
              <strong>Welcome to Blooming!</strong>  We're passionate about crafting delightful pastries that tantalize taste buds. Each creation, from decadent cakes to flaky croissants, is meticulously made with the finest, locally sourced ingredients. At Blooming, we create moments of joy and celebration with every bite. Join us in this delectable journey!
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">Cakes</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                  Pastries
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                  Cookies
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                  Chocolates
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by
                <a href="#"> Blooming</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Categoriespage;
