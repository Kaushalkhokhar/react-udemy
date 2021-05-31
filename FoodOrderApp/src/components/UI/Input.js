import React from 'react'
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} /> 
      {/* Here {...} spread operator get all the props
      and arrange them as needed in element */}
    </div>
  );
})

export default Input;
