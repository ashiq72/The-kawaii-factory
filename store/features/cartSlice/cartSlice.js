import { createSlice, current } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("cart")
  ? { ...JSON.parse(Cookies.get("cart")), loading: true }
  : {
      loading: true,
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "",
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === item._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      Cookies.set("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      Cookies.set("cart", JSON.stringify(state));
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
