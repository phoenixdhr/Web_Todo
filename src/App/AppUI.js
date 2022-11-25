import React from 'react'
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton from "../CreateTodoButton";
import TodoItems from "../TodoItems";

function AppUI(
    {nTodos, 
    nCompleted,
    serchvalue, 
    setSerchvalue,
    todoSearchx, 
    fonComplete,
    fonDelete,}

) {
  return (
    <>
      <TodoCounter 
          nTodos={nTodos} 
          nCompleted={nCompleted} />

      <TodoSearch 
          serchvalue={serchvalue} 
          setSerchvalue={setSerchvalue} />

      <TodoList>
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
  )
}

export {AppUI}