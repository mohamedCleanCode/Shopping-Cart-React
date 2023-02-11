import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon.jpg";
import { useDate } from "../../context/GlobalContext";
import "./Navbr.css";
const Navbar = () => {
  const { cart } = useDate();
  return (
    <div className="navbar container">
      <div className="logo ">
        <img src={Logo} alt="Logo" />
        <Link to="/" className="text-dark fw-bold">
          Commerce.js
        </Link>
      </div>
      <div className="cart-badge">
        <span
          className="counter"
          style={{ display: cart.length >= 1 && "flex" }}
        >
          {cart.length >= 1 && cart.length}
        </span>
        <Link to="/cart">
          <i className="fa-solid fa-cart-plus text-dark"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
