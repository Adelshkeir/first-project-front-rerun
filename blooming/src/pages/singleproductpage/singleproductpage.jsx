import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./singleproductpage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "./singleproductpagereviews";
import { useAuthContext } from "../../hooks/useAuthContext";

const Singleproductpage = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [review, setreview] = useState(null);
  const [name, setName] = useState('');
  const [addedreview, setaddedreview] = useState('');
const {admin} = useAuthContext()



  const addToCart = (item) => {
    let cart = [];
  
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
  
    if (cart.find((cartItem) => cartItem.name === item.name)) {
      let foundItem = cart.find((cartItem) => cartItem.name === item.name);
      foundItem.quantity = parseInt(foundItem.quantity) + parseInt(item.quantity);
  
      cart = [
        ...cart.filter((cartItem) => cartItem.name !== item.name),
        foundItem,
      ];
    } else {
      cart.push(item);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart)
  };

  
  useEffect(() => {
    const fetchingreviews = () => {
      axios
        .get(`http://localhost:4000/api/review/`)
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
        .get(`http://localhost:4000/api/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        })  
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
    axios.post(`http://localhost:4000/api/review/`, reviewData)
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
          <img src={`http://localhost:4000/${product.image}`} />
          <div className="single-product-page-item-price">
            <h2>price</h2>
            <h2>{product.price}$</h2>
          </div>
          <p>Description : {product.description}</p>
          <p>Available flavours : {product.flavours}</p>
          <button id="addToCartBtn" onClick={() => addToCart({
          name: product.product_name,
          price: product.price,
          quantity: 1, 
        })}>Add to Cart</button>
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
