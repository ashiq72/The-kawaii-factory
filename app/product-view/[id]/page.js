import ProductDetails from "@components/ProductDetails/ProductsDetails";
import React from "react";

export default function ProductView({ params }) {
  const res = fetch("http://localhost:5000/products");

  return (
    <div>
      <ProductDetails />
    </div>
  );
}
