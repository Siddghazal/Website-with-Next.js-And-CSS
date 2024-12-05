import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { TfiShoppingCartFull } from "react-icons/tfi";

interface PropsType {
  img: string;
  name: string;
  price: string;
}

const Product = ({ img, name, price }: PropsType) => {
  return (
    <div className="product">
      <img className="product-image" src={img} alt="{name}" />

      <div className="product-details">
        <p className="product-category">Fruits</p>
        <h2 className="product-name">{name}</h2>

        <div className="product-rating">
          <div className="product-stars">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
          <p className="product-review">(321.435)</p>
        </div>

        <h3 className="product-price">{price}</h3>
      </div>

      <div className="product-hover">
        <div className="product-hover-actions">
          <div className="hover-icon">
            <TfiShoppingCartFull />
          </div>
          <div className="hover-icon">
            <CiHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
