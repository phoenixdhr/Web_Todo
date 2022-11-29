import React from 'react'
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton from "../CreateTodoButton";
import TodoItems from "../TodoItems";


function AppUI(
    {
    loading,
    errores,
    nTodos, 
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
        
      {loading&&<h2>cargando...</h2>}
      {errores&&<h2>Hubo un error🙁</h2>}
      {(!loading&&todoSearchx)&&<h2>Crea tu primer ToDo 😉</h2>}

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