import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.wishlist.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
