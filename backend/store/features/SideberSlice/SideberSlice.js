import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const sideSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    isSidebar: (state) => {
      state.value = !state.value;
    },
  },
});

export const { isSidebar } = sideSlice.actions;

export default sideSlice.reducer;
