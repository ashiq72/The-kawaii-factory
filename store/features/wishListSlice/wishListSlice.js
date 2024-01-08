import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("wishList")
  ? { ...JSON.parse(Cookies.get("wishList")), loading: true }
  : {
      loading: true,
      wishListItems: [],
    };

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const item = action.payload;
      const wishListItems = state.wishListItems.find((x) => x._id === item._id);
      if (wishListItems) {
        state.wishListItems = state.wishListItems.map((x) =>
          x._id === item._id ? item : x
        );
      } else {
        state.wishListItems = [...state.wishListItems, item];
      }

      Cookies.set("wishList", JSON.stringify(state));
    },

    removeFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (x) => x._id !== action.payload
      );
      Cookies.set("wishList", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
