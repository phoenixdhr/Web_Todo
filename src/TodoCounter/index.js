import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

const estilos = {
  color: "red",
  backgroundColor: "yelow",
};

const TodoCounter = () => {
  const { nTodos, nCompleted } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {nCompleted} de {nTodos} TODOs{" "}
    </h2>
  );
};

export { TodoCounter };
