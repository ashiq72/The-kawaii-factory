import { createSlice, current } from "@reduxjs/toolkit";
// const userWishlistState = JSON.parse(localStorage.getItem("wishlist")) || [];

const initialState = {
  wishlist: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const selectedProduct = state.wishlist?.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        const product = { ...action.payload, wQuantity: 1 };
        state.wishlist?.push(product);
        let userWishlist = JSON.stringify(current(state.wishlist));
        localStorage.setItem("wishlist", userWishlist);
      } else {
        selectedProduct.wQuantity += 1;
        state.wishlist
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
        // state.selectedWishlist = true;
        let userWishlist = JSON.stringify(current(state.wishlist));
        localStorage.setItem("wishlist", userWishlist);
      }
    },
    removeFromWishList: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product._id !== action.payload._id
      );
      state.selectedWishlist = state.selectedWishlist.filter(
        (id) => id !== action.payload._id
      );
      let userWishlist = JSON.stringify(state.wishlist);
      localStorage.setItem("wishlist", userWishlist);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
