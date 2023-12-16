import { createSelector } from "@reduxjs/toolkit";

// const selectProducts = (state) => state.products.productList;
const selectProducts = (state) => state.cart.cart;

export const selectCartTotalPrice = createSelector(
  [selectProducts],
  (productList) =>
    productList
      .filter((product) => product.status === "in-stock")
      .reduce((total, product) => total + parseFloat(product.orginalPrice), 0)
      .toFixed(2)
);
