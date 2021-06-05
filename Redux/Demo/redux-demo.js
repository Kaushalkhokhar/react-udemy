const redux = require("redux");

// This is for changing the state in store
// This is regulor function should not have side-effect
// So takes a input and returns a new states
// state will have default value otherwise it will have an error
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    // This is new state
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    // This is new state
    return {
      counter: state.counter - 1,
    };
  }
  // This is new state
  return state;
};

// Which manages all our data
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // getstore-method available with createStore
  // Gives a latest state
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe-method which takes a funtion which executes
// when data in the store change
store.subscribe(counterSubscriber);

// To dispatch action to run state update function
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
