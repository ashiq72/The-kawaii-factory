import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import { productsApi } from "./features/productsAPI/productsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "./features/categoriesAPI/categoriesAPI";
import cartSlice from "./features/cartSlice/cartSlice";
import wishListSlice from "./features/wishListSlice/wishListSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
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
