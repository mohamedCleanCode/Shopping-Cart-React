import React from "react";
import { useDate } from "../../../context/GlobalContext";
import "./Product.css";

const Product = ({ product }) => {
  const { addToCart } = useDate();
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <p className="name">{product.title}</p>
        <p className="price">${product.price}</p>
      </div>
      <p className="desc">{product.description.slice(0, 50)}</p>
      <div className="actions">
        <button onClick={() => addToCart(product)}>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
