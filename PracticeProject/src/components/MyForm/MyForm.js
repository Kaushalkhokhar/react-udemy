import { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./MyForm.module.css";

const MyForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const EnteredName = nameInputRef.current.value;
    const EnteredAge = ageInputRef.current.value;
    if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
      setError({
        title: "Empty Field",
        message: "Please enter a username and age.Do not left blank",
      });
      return;
    }
    // Here a + sign is for identifying it as a number not string
    if (+EnteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age(>0)",
      });
      return;
    }

    props.onSaveForm(EnteredName, EnteredAge);
    // we should not do this more ofenly
    // use rarely to manipulate dom by useRef
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            ref={nameInputRef}
          ></input>
          <label>Age (Years)</label>
          <input
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default MyForm;
