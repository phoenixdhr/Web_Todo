import { createContext, useState } from "react";
import React from "react";
import { useItem } from "./useItem";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    items: todos,
    setStorage: setTodo,
    loading,
    errores,
  } = useItem("todoinicial", []);

  const [serchvalue, setSerchvalue] = React.useState("");
  const [agregartodoBotton, setagregartodoBotton] = useState(false);

  const nCompleted = todos.filter((todos) => todos.completed).length;
  const nTodos = todos.length;

  let todoSearchx = [];

  if (serchvalue.length < 1) {
    todoSearchx = todos;
  } else {
    todoSearchx = todos.filter((elementTodo) => {
      const minSearchValue = serchvalue.toLowerCase();
      const minelementTodo = elementTodo.text.toLowerCase();
      return minelementTodo.includes(minSearchValue);
    });
  }

  const fonComplete = (text) => {
    const indiceElmentoTodo = todos.findIndex(
      (elemnto) => elemnto.text === text
    );
    const nuevoTodos = [...todos];
    nuevoTodos[indiceElmentoTodo].completed = true;
    setTodo(nuevoTodos);
  };

  const fonDelete = (todo) => {
    const indiceElmentoTodo = todos.findIndex(
      (elemnto) => elemnto.text === todo.text
    );
    const nuevoTodos = [...todos];
    nuevoTodos.splice(indiceElmentoTodo, 1);
    setTodo(nuevoTodos);
  };

  const fAddTodo = (input) => {
    const nuevoTodos = [...todos];
    nuevoTodos.push({ text: input, completed: false });
    setTodo(nuevoTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        errores,
        nTodos,
        nCompleted,
        serchvalue,
        setSerchvalue,
        todoSearchx,
        fonComplete,
        fonDelete,
        fAddTodo,
        agregartodoBotton,
        setagregartodoBotton,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
