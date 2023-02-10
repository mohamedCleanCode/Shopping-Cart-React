import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <p className="name">{product.name}</p>
        <p className="price">{product.price}</p>
      </div>
      <p className="desc">{product.description}</p>
      <div className="actions">
        <button>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
