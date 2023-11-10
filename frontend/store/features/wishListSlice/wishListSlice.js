import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  selectedWishlist: false,
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const selectedProduct = state.wishlist.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        const product = { ...action.payload, wQuantity: 1 };
        state.wishlist.push(product);
      } else {
        // selectedProduct.wQuantity += 1;
        state.wishlist
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
        state.selectedWishlist = true;
      }
    },
    removeFromCart: (state, action) => {
      const newProducts = state.wishlist.filter(
        (product) => product._id !== action.payload._id
      );

      state.wishlist.push(newProducts);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromCart } = wishListSlice.actions;

export default wishListSlice.reducer;
