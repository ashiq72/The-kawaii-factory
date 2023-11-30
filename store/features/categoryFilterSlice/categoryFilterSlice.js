const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  stock: false,
  category: [],
  Keyboard: "",
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
  },
});
export const { toggleCategory } = categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;
