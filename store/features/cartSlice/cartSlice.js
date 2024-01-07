import { createSlice, current } from "@reduxjs/toolkit";
// const userCartState = JSON.parse(localStorage.getItem("cart")) || [];
// const userWishlistState = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart?.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        const product = { ...action.payload, cQuantity: 1 };
        state.cart?.push(product);
      } else {
        selectedProduct.cQuantity += 1;
        state.cart = state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .concat(selectedProduct);
      }
      let userCart = JSON.stringify(state.cart);
      localStorage.setItem("cart", userCart);
    },

    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload._id;
      state.cart = state.cart.filter(
        (product) => product._id !== productIdToRemove
      );

      let userCart = JSON.stringify(state.cart || []);
      localStorage.setItem("cart", userCart);
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
        let userCart = JSON.stringify(current(state.cart));
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
        let userCart = JSON.stringify(current(state.cart));
      }
    },
  },
});

export const { addToCart, removeFromCart, handleIncrement, handleDecrement } =
  cartSlice.actions;

export default cartSlice.reducer;
