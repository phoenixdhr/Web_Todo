import React from 'react'
import "./TodoCounter.css"


const estilos={
  color: "red",
  backgroundColor: "yelow"

};

const TodoCounter = () => {
  return (
    <h2  className="TodoCounter">Has completado 2 de 3 TODOs </h2>
  )
}

export {TodoCounter}