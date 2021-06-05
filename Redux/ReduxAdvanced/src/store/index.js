import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.totalAmount += newItem.price;

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

    removeItem(state, action) {
      const removeTitle = action.payload.title;
      for (const item in state.items) {
        if (state.items[item].title === removeTitle) {
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

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
