import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import wepik from "../../assets/wepik-export-202312151501034xOk.png"
import "./about-us.css"


const Aboutus = () => {
  return (
    <div>
    <Navbar/>
    <div className="About-us-page">
       <div className="about-us-section1">
<div className='about-us-first-info'>
        <h2 className='about-us-first-header'>Sweets & More</h2>

        <p className='about-us-first-paragraph'>Welcome to The Sweet Blooms Kitchen, where every delicious bite is a blossoming journey
             of love and flavour. Our charming online dessert shop, based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delectable home made petites fours in town.
            based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delec
            table home made petites fours in town.Welcome to The Sweet Blooms Kitchen, where every delicious bite is a blossoming journey
             of love and flavour.of love and flavour. Our charming online dessert shop, based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delectable home made petites fours in town.
            based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delec
             Welcome to The Sweet Blooms Kitchen, of love and flavour. Our charming online dessert shop, based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delectable home made petites fours in town.
            based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delecwhere every delicious bite is a blossoming journey
             of love and flavour.</p>
             </div>
             <img src={wepik} alt="image for aboutus blooming" /> 
        </div> 


        <div className="about-us-section2">

             <img src={wepik} alt="image for aboutus blooming" /> 
             <div className='about-us-first-info'>
        <h2 className='about-us-first-header'>Sweets & More</h2>

        <p className='about-us-first-paragraph'>Welcome to The Sweet Blooms Kitchen, where every delicious bite is a blossoming journey
             of love and flavour. Our charming online dessert shop, based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delectable home made petites fours in town.
            based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delec
            table home made petites fours in town.Welcome to The Sweet Blooms Kitchen, where every delicious bite is a blossoming journey
             of love and flavour.
             Welcome to The Sweet Blooms Kitchen, where every delicious bite is a blossoming journey
             of love and flavour.of love and flavour. Our charming online dessert shop, based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delectable home made petites fours in town.
            based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delec.of love and flavour. Our charming online dessert shop, based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delectable home made petites fours in town.
            based in the of Tripoli, is led by a dedicated mom 
            with a passion for creating the most delec</p>
             </div>
        </div> 

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
    </div>
  )
}

export default Aboutus;