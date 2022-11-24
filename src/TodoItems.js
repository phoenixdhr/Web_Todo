import React from 'react'
import "./TodoItems.css"

function TodoItems(props) {

  // const onComplete =()=>{
  //   alert("Ya completaste el toDo: " + props.text)
  // }

  // const onDelete =()=>{
  //   alert("Borraste el toDo: " + props.text)
  // }

  return (
    
        <li className="TodoItems">
           <span 
              className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
              onClick={props.fonComplete}
            >
           √
           </span>
           
           <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {props.text}</p>
           
           <span 
              className="Icon Icon-delete "
              onClick={props.fonDelete}
              >
           X
           </span>
        </li>
    
  )
}

export default TodoItems