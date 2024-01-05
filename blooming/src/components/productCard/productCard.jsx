import "./productCard.css";
import EditIcon from "../../assets/Edit-Icon.png";
import DeleteIcon from "../../assets/Delete-Icon.png";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

const ProductCard = ({ product, handleChangeProduct, refresh }) => {
  const admin = useAuthContext();
  const deleteProduct = async (id) => {
    if (!admin) {
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:4001/api/product/${product.id}`,
        {
          headers: {
            Authorization: `Bearer ${admin.admin.token}`,
          },
        }
      );
      console.log("tokennn", admin.token);
      console.log(response.data);
      refresh("a");
    } catch (error) {
      console.log(error);
      console.log("tokennn", admin.token);
      console.log("hyda admin", admin);
    }
  };
  return (
    <div className="card-container-product">
      <div className="card-product">
        <div className="card-img-product">
          <img
            className="cake-main-image-product"
            src={`http://localhost:4001/${product.image}`}
          />
        </div>

        <div className="card-title-product">{product.product_name}</div>
        <div className="subtitle-product-container">
          <div className="card-subtitle-product">{product.description}</div>
          <div className="card-subtitle-product">{product.flavours}</div>
          <div className="card-subtitle-product">
            {product.Category.category_name}
          </div>
        </div>
        <hr className="card-divider-product" />
        <div className="card-footer-product">
          <div className="card-price-product">
            <span className="edit-span-product">
              <button>
                <img
                  src={EditIcon}
                  onClick={() => {
                    handleChangeProduct(product);
                  }}
                />
              </button>
            </span>

            {product.price}
            <span className="delete-span-product">
              <button>
                <img
                  onClick={() => deleteProduct(product.id)}
                  src={DeleteIcon}
                />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
