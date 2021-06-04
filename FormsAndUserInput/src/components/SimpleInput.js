import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const validateName = (value) => {
    return value.trim() !== "";
  };

  const validateEmail = (value) => {
    return value.includes("@");
  };

  const {
    enteredValue: nameInputValue,
    valueIsValid: nameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validateName);

  const {
    enteredValue: emailInputValue,
    valueIsValid: emailIsValid,
    inputIsInvalid: emailInputIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (nameInputIsInvalid || emailInputIsInvalid) {
      return;
    }
    nameReset();
    emailReset();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameInputValue}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter some text.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInputValue}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter include @.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
