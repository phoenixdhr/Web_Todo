import React from 'react'
import "./CreateTodoButton.css"

const onClickButton =(msg)=>{
  alert(msg)
}

function CreateTodoButton() {
  return (
    <button 
    className="CreateTodoButton"
    onClick={()=>onClickButton("Aqui se deberia abrir el modal")}
    >+</button>
  )
}

export default CreateTodoButton