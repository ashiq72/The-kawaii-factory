const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  stock: false,
  category: [],
  Keyboard: "",
  sort: [],
};

const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      if (!state.category.includes(action.payload)) {
        state.category.push(action.payload);
      } else {
        state.category = state.category.filter(
          (cate) => cate !== action.payload
        );
      }
    },
    menuCategory: (state, action) => {
      // Clear the array and add the new value
      state.category = [action.payload];
    },
    sortCategory: (state, action) => {
      // Clear the array and add the new value
      state.sort = [action.payload];
    },
  },
});
export const { toggleCategory, menuCategory, sortCategory } =
  categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;
