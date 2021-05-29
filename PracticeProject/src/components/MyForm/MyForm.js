import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./MyForm.module.css";

const MyForm = (props) => {
  const [formUserName, setFormUsername] = useState("");
  const [formAge, setFormAge] = useState("");
  const [error, setError] = useState();

  const UsernameHandler = (event) => {
    setFormUsername(event.target.value);
  };

  const AgeHandler = (event) => {
    setFormAge(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    if (formUserName.trim().length === 0 || formAge.trim().length === 0) {
      setError({
        title: "Empty Field",
        message: "Please enter a username and age.Do not left blank",
      });
      return;
    }
    // Here a + sign is for identifying it as a number not string
    if (+formAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age(>0)",
      });
      return;
    }

    props.onSaveForm(formUserName, formAge);

    setFormUsername("");
    setFormAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* Here name of class(cssClass) is in our hand for wrapper JSX(i.e Card) */}
      <Card className={classes.input}>
        <form onSubmit={FormSubmitHandler}>
          <label>Username</label>
          <input
            type="text"
            value={formUserName}
            onChange={UsernameHandler}
          ></input>
          <label>Age (Years)</label>
          <input type="number" value={formAge} onChange={AgeHandler}></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default MyForm;
