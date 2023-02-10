import React from "react";
import Product from "./Product/Product";
import "./Products.css";
const products = [
  {
    id: 1,
    name: "product-1",
    description: "some thing",
    price: "$55",
    image:
      "https://media.btech.com/media/catalog/product/cache/22b1bed05f04d71c4a848d770186c3c4/k/e/kettel_1_.png",
  },
  {
    id: 2,
    name: "product-2",
    description: "some thing",
    price: "$66",
    image:
      "https://media.btech.com/media/catalog/product/cache/22b1bed05f04d71c4a848d770186c3c4/k/e/kettel_1_.png",
  },
];
const Products = () => {
  return (
    <div className="products container py-5">
      <div className="row gap-2">
        {products.map((product) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
