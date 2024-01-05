// import { useEffect, useState } from "react";
// import axios from "axios";
const Review = ({data}) => {



  return (
    <div className="single-product-page-product-reviews-single">
<h4>{data.name}</h4>
<p>{data.review}</p>
 
    </div>
  );
};

export default Review;
