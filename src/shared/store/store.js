import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import basketReducer from "./slice/basketSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
  },
});
