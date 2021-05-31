import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const mealItemInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(true);
  const cartItemHandler = (event) => {
    event.preventDefault();
    const cartItemAmount = mealItemInputRef.current.value;
    const cartItemAmountNumber = +cartItemAmount;
    // + Here used to convert string to number

    // validation check
    if (
      cartItemAmount.trim() === 0 ||
      cartItemAmountNumber < 1 ||
      cartItemAmountNumber > 5
    ) {
      setFormIsValid(false); 
      return;
    }

    // pass to parent
    // because we need extra paramets with amount to pass to context
    props.onFormValidation(cartItemAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={cartItemHandler}>
      <Input
        ref={mealItemInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {/* This runs only when min, mx in not given to input element */}
      {!formIsValid && <p>Please Enter Valid Amount(0-5)</p>}
    </form>
  );
};

export default MealItemForm;
