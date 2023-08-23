import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "shared/services/products";
export const allProductsAsync = createAsyncThunk(
  "products/allProductsAsync",
  async () => {
    const response = await getProducts();
    return response.data.products;
  }
);
const initialState = {
  productList: [],
};
export const counterSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(allProductsAsync.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export const selProductList = (state) => state.products.productList;
export default counterSlice.reducer;
