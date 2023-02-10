import React from "react";
import Product from "./Product/Product";
import "./Products.css";
const Products = ({ products }) => {
  return (
    <div className="products container py-5">
      <div className="row justify-content-between">
        {products.map((product) => {
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              key={product.id}
            >
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
