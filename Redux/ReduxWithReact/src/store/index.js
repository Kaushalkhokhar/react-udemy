import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './counter-redux';
import { authSlice } from './auth-slice';


const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  // Here if more than one reducer than we can use object with key value pair
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// Purely without redux-toolkit

// const counterReducer = (state = initialSate, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
