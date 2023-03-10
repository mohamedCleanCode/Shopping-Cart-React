import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Checkout, Navbar, Products } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Products products={products && products} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
