import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton from "../CreateTodoButton";
import TodoItems from "../TodoItems";
import { TodoContext } from "../TodoContext";
import useContext from "react";



function AppUI() {

  const {
    loading,
    errores,
    nTodos,
    nCompleted,
    serchvalue,
    setSerchvalue,
    todoSearchx,
    fonComplete,
    fonDelete,
  } = React.useContext(TodoContext);



  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {loading && <h2>cargando...</h2>}
        {errores && <h2>Hubo un error🙁</h2>}
        {!loading && !todoSearchx && <h2>Crea tu primer ToDo 😉</h2>}

        {todoSearchx.map((todo) => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            fonComplete={() => fonComplete(todo.text)}
            fonDelete={() => fonDelete(todo)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
