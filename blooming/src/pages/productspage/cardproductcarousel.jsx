import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CardProduct from "./cardproduct.jsx";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const Productcarousel = ({ products,category_name }) => {
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
{products.map((product, index) => (
  <CardProduct key={index} product={product} />
))}
    </Carousel>
  );
};

export default Productcarousel;
