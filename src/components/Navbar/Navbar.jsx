import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon.jpg";
import "./Navbr.css";
const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="logo ">
        <img src={Logo} alt="Logo" />
        <Link to="/" className="text-dark fw-bold">
          Commerce.js
        </Link>
      </div>
      <div className="cart-badge">
        <Link to="/cart">
          <i className="fa-solid fa-cart-plus text-dark"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
