import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import useContext from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { fAddTodo, setagregartodoBotton, setTodo } =
    React.useContext(TodoContext);

  const [newvalue, setnewvalue] = useState("");

  const onchange = (event) => {
    setnewvalue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //  LA PAGINA DEJA DE RECARGAR POR CADA CLIK EN EL BOTON "AGREGAR"
    fAddTodo(newvalue);
    setagregartodoBotton(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        required
        onChange={onchange}
        placeholder={"crea tu primer todo"}
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Agregar
        </button>

        <button
          type="button"
          onClick={() => setagregartodoBotton(false)}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
