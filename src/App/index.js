import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";

const tododefault = [
  { text: "desayunar", completed: true },
  { text: "almorzar", completed: false },
  { text: "cenar", completed: true },
  { text: "lonche", completed: false },
  { text: "merienda", completed: false },
  { text: "ricoco", completed: false },
];

function App() {
  const [serchvalue, setSerchvalue] = React.useState("");
  const [todos, setTodo] = React.useState(tododefault);

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

  return (
    <AppUI
          nTodos={nTodos} 
          nCompleted={nCompleted}
          serchvalue={serchvalue} 
          setSerchvalue={setSerchvalue}
          todoSearchx={todoSearchx}
          fonComplete={fonComplete}
          fonDelete={fonDelete}
    
    ></AppUI>
  );
}

export default App;
