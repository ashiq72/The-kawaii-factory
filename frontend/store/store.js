import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./features/productsAPI/productsAPI";
import { categoriesApi } from "./features/categoriesAPI/categoriesAPI";
import cartSlice from "./features/cartSlice/cartSlice";
import wishListSlice from "./features/wishListSlice/wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishListSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      categoriesApi.middleware,
    ]),
});

setupListeners(store.dispatch);
