import React from 'react'
import "./TodoCounter.css"


const estilos={
  color: "red",
  backgroundColor: "yelow"

};

const TodoCounter = ({nTodos, nCompleted}) => {


  return (
    <h2  className="TodoCounter">Has completado {nCompleted} de {nTodos} TODOs </h2>
  )
}

export {TodoCounter}



