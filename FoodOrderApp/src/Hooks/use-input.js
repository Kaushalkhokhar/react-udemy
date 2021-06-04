import {useState } from 'react'

const useInput = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const valueIsValid = validate(inputValue);
  const inputIsInvalid = !valueIsValid && inputIsTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputIsTouched(false);
    setInputValue('');
  }

  return (
      {
          inputValue,
          valueIsValid,
          inputIsInvalid,
          onChangeHandler,
          onBlurHandler,
          reset
      }
  )

};

export default useInput;
