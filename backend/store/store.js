import { configureStore } from "@reduxjs/toolkit";
import sideSliceReducer from "./features/SideberSlice/SideberSlice";

export const store = configureStore({
  reducer: {
    sidebar: sideSliceReducer,
  },
});
