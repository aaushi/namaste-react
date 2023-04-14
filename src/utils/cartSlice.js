import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurant:[]
  },
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurant.push(action.payload);
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});



export const { addRestaurant, addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
