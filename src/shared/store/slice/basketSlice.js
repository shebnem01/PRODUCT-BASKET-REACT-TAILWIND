import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  basketList: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let product = action.payload;
      let newBasketList = [...state.basketList];
      const currentItemIndex = newBasketList.findIndex(
        (item) => item.id === product.id
      );
      if (currentItemIndex > -1) {
        newBasketList[currentItemIndex].quantity += 1;
      } else {
        newBasketList = [...newBasketList, { ...product, quantity: 1 }];
      }
      state.basketList = newBasketList;
      toast.success("Product add basket");
    },
    removeFromBasket: (state, action) => {
      let product = action.payload;
      let newBasketList = [...state.basketList];
      newBasketList = newBasketList.filter((item) => item.id !== product.id);
      state.basketList = newBasketList;
      toast.error("Product remove from basket");
    },
  },
});
export const { addBasket, removeFromBasket } = basketSlice.actions;
export const selBasketList = (state) => state.basket.basketList;
export default basketSlice.reducer;
