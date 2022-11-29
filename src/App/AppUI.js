import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton from "../CreateTodoButton";
import TodoItems from "../TodoItems";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          errores,
          todoSearchx,
          completed,
          fonComplete,
          fonDelete,
        }) => {
          return (
            <TodoList>
              {loading && <h2>cargando...</h2>}
              {errores && <h2>Hubo un error🙁</h2>}
              {!loading && todoSearchx && <h2>Crea tu primer ToDo 😉</h2>}

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
          );
        }}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
