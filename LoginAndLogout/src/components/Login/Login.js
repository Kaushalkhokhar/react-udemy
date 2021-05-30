import React, {
  useEffect,
  useReducer,
  useState,
  useContext,
  useref,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // Reducer is used for more complex cases
  // To read more go to readme.md
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  // emailState holds the current state values

  const [passState, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: null,
  });

  // This is done for optimal use of useEffect
  // Once validation is checked it should not run
  // for that we just use isValid from useReducer states
  // here in this case it is not compulsory but in some case
  // we neeed to have such usecase
  const { isValid: emailValid } = emailState; // here this line is know as aliazing
  const { isValid: passValid } = passState;

  // Used to avoid overlooping conditions
  // To read more go to readme.md
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Side Effect runs...");
      setFormIsValid(emailValid && passValid);
    }, 500);

    // It runs on every sideeffect
    // execution excepting first execution
    return () => {
      console.log("CLEANUP Runs...");
      clearTimeout(identifier);
    };
  }, [emailValid, passValid]);
  /* 
  In the previous code , 
  we used object destructuring to add object properties 
  as dependencies to useEffect().

  const { someProperty } = someObject;
  useEffect(() => {
    // code that only uses someProperty ...
  }, [someProperty]);
  This is a very common pattern and approach, 
  which is why I typically use it and why I show it here 
  (I will keep on using it throughout the course).
  I just want to point out, that they key thing is NOT 
  that we use destructuring but that we pass specific 
  properties instead of the entire object as a dependency.

  We could also write this code and it would work in the same way.

  useEffect(() => {
    // code that only uses someProperty ...
  }, [someObject.someProperty]);
  This works just fine as well!

  But you should avoid this code:

  useEffect(() => {
    // code that only uses someProperty ...
  }, [someObject]);
  Why?

  Because now the effect function would re-run 
  whenever ANY property of someObject changes - not just 
  the one property (someProperty in the above example) 
  our effect might depend on. */

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(event.target.value.includes("@") && passState.isValid);
  };
  const passwordChangeHandler = (event) => {
    dispatchPass({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: "INPUT_BLUR" });
  };

  const ctxAuth = useContext(AuthContext);

  const emailInputref = useRef();
  const passInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctxAuth.onLogin(emailState.value, passState.value);
    } else if (!emailState.isValid) {
      emailInputref.current.focus();
      // this is not regular 'focus' but 
      // we get it from child element
      // by forwardRef
    } else {
      passInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputref}
          isValid={emailState.isValid}
          type="email"
          id="email"
          label="Email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passInputRef}
          isValid={passState.isValid}
          type="password"
          id="password"
          label="Password"
          value={passState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          {/* Is for regular login button. 
          <Button type="submit" className={classes.btn} disabled={!formIsValid}> */}
          {/* Is for using forwardRef */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
