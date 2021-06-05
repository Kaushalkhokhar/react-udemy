import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; // useSelector is hook
import { counterActions } from '../store/index'

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector can be used to take part of state value
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" }); // Without redux-toolkit
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 }); // Without redux-toolkit
    dispatch(counterActions.increase(5)); // { type: 'DEFAULT-NAME-BY-TOOLKIT', payload: 10 }
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" }); // Without redux-toolkit
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' }) // Without redux-toolkit
    dispatch(counterActions.toggler());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
