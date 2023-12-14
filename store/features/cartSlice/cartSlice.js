import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        const product = { ...action.payload, cQuantity: 1 };
        state.cart.push(product);
      } else {
        selectedProduct.cQuantity += 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
        // state.selectedWishlist = true;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
    },
    handleIncrement: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (selectedProduct && selectedProduct.cQuantity <= 9) {
        const unitPrice = parseFloat(selectedProduct.orginalPrice);
        selectedProduct.orginalPrice = (
          (unitPrice / selectedProduct.cQuantity) *
          (selectedProduct.cQuantity += 1)
        ).toFixed(2);
      }
    },
    handleDecrement: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (selectedProduct && selectedProduct.cQuantity >= 2) {
        const unitPrice = parseFloat(selectedProduct.orginalPrice);
        selectedProduct.orginalPrice = (
          (unitPrice / selectedProduct.cQuantity) *
          (selectedProduct.cQuantity -= 1)
        ).toFixed(2);
      }
    },
  },
});

export const { addToCart, removeFromCart, handleIncrement, handleDecrement } =
  cartSlice.actions;

export default cartSlice.reducer;
