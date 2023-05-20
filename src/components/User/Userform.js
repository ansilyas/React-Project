import React, { useState } from "react";
import Card from "../Ul/Card";
import Button from "../Ul/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../Ul/ErrorModal";
const AddUser = (props) => {
  const [enterusername, setenterusername] = useState("");
  const [enterfathername, setenterfathername] = useState("");
  const [enterage, setEnterAge] = useState("");
  const [Error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enterusername.trim().length === 0 ||
      enterfathername.trim().length === 0 ||
      enterage.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty value).",
      });
      return;
    }
    // By adding (+) we tell its a number
    if (+enterage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid Age.",
      });
      return;
    }
    //  Restting the input Value this way (Value props is also use)
    props.onAddUser(enterusername, enterfathername, enterage);
    setenterusername("");
    setenterfathername("");
    setEnterAge("");
  };

  const userChangeHandler = (event) => {
    setenterusername(event.target.value);
  };
  const fatherChangeHandler = (event) => {
    setenterfathername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* Use an Error  */}
      {Error && (
        <ErrorModal
          HandleError={errorHandler}
          title={Error.title}
          message={Error.message}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enterusername}
            onChange={userChangeHandler}
          ></input>
          <label htmlFor="fathername">FatherName</label>
          <input
            id="fathername"
            type="text"
            value={enterfathername}
            onChange={fatherChangeHandler}
          ></input>
          <label htmlFor="age">Age(Year)</label>
          <input
            id="age"
            type="numder"
            value={enterage}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add Form</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
