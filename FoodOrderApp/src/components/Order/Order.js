import useInput from "../../Hooks/use-input";
import Modal from "../UI/Modal";
import useHttp from "../../Hooks/use-http";
import classes from "./Order.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Order = (props) => {
  const cartCtx = useContext(CartContext);
  const validateName = (value) => {
    return value.trim() !== "";
  };

  const validateAddress = (value) => {
    return value.trim() !== "";
  };

  const {
    inputValue: nameInputValue,
    valueIsValid: nameValueIsValid,
    inputIsInvalid: nameInputIsInvalid,
    onChangeHandler: nameChangeHanler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validateName);

  const {
    inputValue: addressInputValue,
    valueIsValid: addressValueIsValid,
    inputIsInvalid: addressInputIsInvalid,
    onChangeHandler: addressChangeHanler,
    onBlurHandler: addressBlurHandler,
    reset: addressReset,
  } = useInput(validateAddress);

  const { error, sendRequest } = useHttp();

  let formIsValid = false;

  if (nameValueIsValid && addressValueIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (nameInputIsInvalid || addressInputIsInvalid) {
      return;
    }

    sendRequest({
      name: nameInputValue,
      address: addressInputValue,
      order: {
        orderId: nameInputValue,
        items: cartCtx.items,
        totalAmount: cartCtx.totalAmount,
      },
    });
    nameReset();
    addressReset();
  };

  const nameInputClass = nameInputIsInvalid
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  const addressInputClass = addressInputIsInvalid
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  return (
    <Modal onHide={props.onHide}>
      {error && <p>Something went wrong!.Order Again</p>}
      <form onSubmit={onSubmitHandler}>
        <div className={nameInputClass}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={nameInputValue}
            onChange={nameChangeHanler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div className={addressInputClass}>
          <label htmlFor="address">Your Address</label>
          <textarea
            id="address"
            value={addressInputValue}
            onChange={addressChangeHanler}
            onBlur={addressBlurHandler}
          />
        </div>
        <button disabled={!formIsValid}>Submit</button>
      </form>
    </Modal>
  );
};
export default Order;
