import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

/**************************Work flow*********************** *****/
//Note:-
//1. Event is always generated when something is submitted
//2. onSubmit is used to pass the event. Event is a object with sub component target
//3. Card and button is custom component here
//4. Value attribute is used in input component in order to set the input with current state of user data\
//5. trim() is used to cancel any space or white character inside the string
//6. + is used to check if the string is a number or not

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredUserAge, setenteredUserAge] = useState("");
  const [error, seterror] = useState();
  on

  const addUserHandler = (event) => {
    event.preventDefault();
    //preventDefault() is used to delete all previous default events and create a new one
    //Validation
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      seterror({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      seterror({
        title: "Invalid age",
        message: "Please enter a valid age(>0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);
    //Below are null value assigned to updated value so that we can further edit the value

    setenteredUsername("");
    setenteredUserAge("");
  };

  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setenteredUserAge(event.target.value);
  };

  const setErrorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={setErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="Username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler} 
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={userageChangeHandler}
          />
          <Button type="Submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
