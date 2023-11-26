import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  selectedWishlist: [],
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
    removeFromWishList: (state, action) => {
      // const newProducts = state.wishlist.filter(
      //   (product) => product._id !== action.payload._id
      // );

      // state.wishlist.push(newProducts);
      state.wishlist = state.wishlist.filter(
        (product) => product._id !== action.payload._id
      );
      state.selectedWishlist = state.selectedWishlist.filter(
        (id) => id !== action.payload._id
      );
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
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList, selectedWishlist } =
  wishListSlice.actions;

export default wishListSlice.reducer;
