import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Categorypagecard from "./categoriespagecard";
import axios from "axios";
import {useAuthContext} from '../../hooks/useAuthContext.jsx'

const Categorycarousel = () => {
  const [category, setcategory] = useState([]);

  const { admin } = useAuthContext();

  useEffect(() => {
    const fetchcategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/category/",
          {
            headers: {
              Authorization: `Bearer ${admin.token}`,
            },
          }
        );
        const data = response.data;
        setcategory(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setcategory(null);
      }
    };

    fetchcategory();
  }, []);
  console.log(category);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass={`carousel-item-padding-40-px`}
    >
      {category &&
        category.map((item, index) => (
          <Categorypagecard key={index} data={item} />
        ))}
    </Carousel>
  );
};

export default Categorycarousel;
