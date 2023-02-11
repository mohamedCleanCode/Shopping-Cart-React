import React, { useEffect, useState } from "react";
import "./ProductCart.css";

const ProductCart = ({ product }) => {
  const [qantity, setQantity] = useState(0);

  useEffect(() => {
    setQantity(product.qantity ? product.qantity : 0);
  }, []);
  return (
    <div className="product">
      <img src={product?.images[0]} alt={product.title} />
      <div className="info">
        <p className="name">{product.title}</p>
        <p className="price">${product.price}</p>
      </div>
      <div className="actions">
        <button className="decrease">-</button>
        {qantity}
        <button className="increase">+</button>
        <button className="remove-item bg-danger rounded text-light">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
