import React from "react";
import { useDate } from "../../../context/GlobalContext";
import "./ProductCart.css";

const ProductCart = ({ product }) => {
  const { removeFromCart } = useDate();
  return (
    <div className="product">
      <img src={product?.images[0]} alt={product.title} />
      <div className="info">
        <p className="name">{product.title}</p>
        <p className="price">${product.price}</p>
      </div>
      <div className="actions">
        <button className="decrease">-</button>
        {product.qantity}
        <button className="increase">+</button>
        <button
          className="remove-item bg-danger rounded text-light"
          onClick={() => removeFromCart(product)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
