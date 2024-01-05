import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./singleproductpage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "./singleproductpagereviews";

const Singleproductpage = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [review, setreview] = useState(null);
  const [name, setName] = useState('');
  const [addedreview, setaddedreview] = useState('');

  useEffect(() => {
    const fetchingreviews = () => {
      axios
        .get(`http://localhost:4001/api/review/`)
        .then((res) => {
          setreview(res.data.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setreview([]);
        });
    };

    fetchingreviews();
  }, []);

  useEffect(() => {
    const fetchsingleproduct = () => {
      axios
        .get(`http://localhost:4001/api/product/${id}`)
        .then((res) => {
          setproduct(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setproduct([]);
        });
    };

    fetchsingleproduct();
  }, []);




  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name.trim() || !addedreview.trim()) {
      return;
    }
    const reviewData = {
      name,
      review: addedreview,
      ProductId: product.id, 
    };
    axios.post(`http://localhost:4001/api/review/`, reviewData)
      .then((response) => {
        fetchingreviews();
        setName('');
        setaddedreview('');
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  };





  return (
    <div>
      <Navbar />
      <h1 className="single-product-page-item-name">{product.product_name}</h1>
      <div className="single-product-page-container">
        <div className="single-product-page-product-container">
          <img src={`http://localhost:4001/${product.image}`} />
          <div className="single-product-page-item-price">
            <h2>price</h2>
            <h2>{product.price}$</h2>
          </div>
          <p>Description : {product.description}</p>
          <p>Available flavours : {product.flavours}</p>
        </div>

        <div className="single-product-page-product-reviews">
          <div className="single-product-page-product-reviews-first">
            <h1 className="single-product-page-product-reviews-first-header">
              Reviews
            </h1>

            {review &&
              review.filter((item) => item.ProductId === product.id).map((item, index) => <Review key={index} data={item} />)}
          </div>

          <div className="single-product-page-product-reviews-second">
            <p>add a review?</p>
            <form onSubmit={handleReviewSubmit}>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <br />
              <label>
                Review:
                <textarea value={addedreview} onChange={(e) => setaddedreview(e.target.value)} />
              </label>
              <br />
              <button type="submit">Submit Review</button>
            </form>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproductpage;
