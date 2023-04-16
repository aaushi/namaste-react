import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurant: [],
    totalPrice: 0
  },
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurant.push(action.payload);
    },
    addItem: (state, action) => {
      
      state.items.push(action.payload);
      state.totalPrice= state.totalPrice +(action.payload.card?.info?.price)/100;
    },
    removeItem: (state, action, cartItems) => {
      console.log(action.payload);
      console.log(state.items);
      const filteredData = state.items.filter((item) => {
        //console.log(item?.card?.info?.name + item?.card?.info?.id);
        //console.log(action.payload.card?.info?.name + action.payload.card?.info?.id );
        //console.log(item?.card?.info?.id !== action.payload.card?.info?.id);
        item?.card?.info?.id !== action.payload.card?.info?.id;
      });
      console.log(filteredData);
      //state.items.pop();
    },
    
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addRestaurant, addItem, removeItem, clearCart, totalCost} =
  cartSlice.actions;

export default cartSlice.reducer;
