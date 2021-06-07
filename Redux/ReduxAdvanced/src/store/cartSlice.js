import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalAmount: 0, isFetch: false };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    copyItem(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.isFetch = false;
    },
    addItem(state, action) {
      const newItem = action.payload;
      state.totalAmount += newItem.price;
      state.isFetch = true;

      let count = 0;
      for (const item in state.items) {
        if (state.items[item].title === newItem.title) {
          state.items[item].amount += 1;
          count++;
        }
      }
      if (count === 0) {
        state.items.push(newItem);
      }
    },
    // Never use any asynchronus task like fetching data from database in reducers
    removeItem(state, action) {
      state.isFetch = true;
      const removeTitle = action.payload.title;
      for (const item in state.items) {
        if (state.items[item].title === removeTitle) {
          state.totalAmount -= state.items[item].price;
          if (state.items[item].amount > 1) {
            state.items[item].amount -= 1;
          } else if (state.items[item].amount === 1) {
            state.items.splice(item, 1);
          }
        }
      }
    },
  },
});

export default cartSlice;
