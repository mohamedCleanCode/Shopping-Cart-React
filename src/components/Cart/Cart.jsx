import React from "react";
import { useDate } from "../../context/GlobalContext";
import ProductCart from "./ProductCart/ProductCart";

const Cart = () => {
  const { cart, total } = useDate();
  return (
    <div className="cart container py-5">
      <h1>Your Shopping Cart {cart.length}</h1>
      <div className="row justify-content-between">
        {cart.map((product) => {
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              key={product.id}
            >
              <ProductCart product={product} />
            </div>
          );
        })}
      </div>
      <div className="subtotal d-flex justify-content-between align-items-center pt-3">
        <p className="fs-3">Subtotal: ${total}</p>
        <div className="subtotal actions">
          <button className="bg-danger border-0 text-light p-2 me-3">
            Empty Cart
          </button>
          <button className="bg-primary border-0 text-light p-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
