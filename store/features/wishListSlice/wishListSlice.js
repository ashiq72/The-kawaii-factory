import { createSlice, current } from "@reduxjs/toolkit";
// const userWishlistState = JSON.parse(localStorage.getItem("wishlist")) || [];

const initialState = {
  wishlist: [],
  selectedWishlist: [],
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
    selectedWishlist: (state, action) => {
      const selectedID = action.payload;

      // Ensure that selectedWishlist is initialized as an array
      if (!state.selectedWishlist || !Array.isArray(state.selectedWishlist)) {
        state.selectedWishlist = [];
      }

      const isSelected = state.selectedWishlist.includes(selectedID);

      if (!isSelected) {
        state.selectedWishlist = [...state.selectedWishlist, selectedID];
      } else {
        state.selectedWishlist = state.selectedWishlist.filter(
          (id) => id !== selectedID
        );
        state.selectedWishlist.push(selectedID);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList, selectedWishlist } =
  wishListSlice.actions;

export default wishListSlice.reducer;
