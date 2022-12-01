import React, { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

const onClickButton = (msg) => {
  alert(msg);
};

function CreateTodoButton() {
  const { setagregartodoBotton } = useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => setagregartodoBotton((prevState) => !prevState)}
    >
      +
    </button>
  );
}

export default CreateTodoButton;
