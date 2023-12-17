import React from "react";
import wepik from "../assets/wepik-export-20231215143736pQJ1.png"
import wepik2 from "../assets/wepik-export-202312151501034xOk.png"
const HomeCarousel= () =>{

return (


    <div
    id="carouselExampleAutoplaying"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-pause="false"
    data-bs-interval="4000"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={wepik}
          className="w-100 h-100 vh-100 custom-big-image-home"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src={wepik2}
          className="w-100 h-100 vh-100 custom-big-image-home"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src={"https://img.freepik.com/free-photo/wooden-board-full-sweet-cookies-peanut-brittles_114579-46856.jpg?w=1380&t=st=1702650265~exp=1702650865~hmac=25162cd6a92ff309aa2ed121522abb8fbf8ca9e7447eeb501dc1db6f679e0a8c"}
          className="w-100 h-100 vh-100 custom-big-image-home"
          alt="..."
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
    <div className="custom-div-homepage">
      <h1 className=''>
        <strong>Blooming</strong>
      </h1>
      <h3>Welcome to The Sweet Blooms Kitchen, where every bite is a reminder of the warmth of home and the charm of something made with love.</h3>
    </div>
  </div>


)


}


export default HomeCarousel