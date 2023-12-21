import Navbar from "../../components/navbar/Navbar"
import "./singleproductpage.css"
const Singleproductpage = () => {
return (
<div>
<Navbar />
<h1 className="single-product-page-item-name">Item's name</h1>
<div className="single-product-page-container">

<div className="single-product-page-product-container">
<img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" />
<div className="single-product-page-item-price">
<h2>price</h2>
<h2>50$</h2>
</div>
<p>Description</p>
<p>Flavours</p>
</div>





<div className="single-product-page-product-reviews">
<h1>Reviews</h1>
</div>








</div>




</div>
)
}








export default Singleproductpage 