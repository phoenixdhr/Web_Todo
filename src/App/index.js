import React, { useEffect } from "react";
import "./App.css";
import { AppUI } from "./AppUI";

function useItem(itemName_V1, initial_Items) {
  const [items, setItems] = React.useState(initial_Items);
  const [loading, setloading] = React.useState(true);
  const [errores, seterrores] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        if (JSON.parse(localStorage.getItem(itemName_V1) == null)) {
          initial_Items = initial_Items;
        } else {
          initial_Items = JSON.parse(localStorage.getItem(itemName_V1));
        }
        setloading(false);
        setItems(initial_Items)

      } catch (error) {
        seterrores(error);
      }
    }, 1000);
  }, []);

  const setStorage = (params) => {
    
    try {
      setItems(params);
      localStorage.setItem(itemName_V1, JSON.stringify(params));
      initial_Items = JSON.parse(localStorage.getItem(itemName_V1));
    } catch (error) {
      seterrores(error)
    }
    



  };

  return { items, setStorage, loading, errores };
}

const tododefault = [
  { text: "desayunar", completed: true },
  { text: "almorzar", completed: false },
  { text: "cenar", completed: true },
  { text: "lonche", completed: false },
  { text: "merienda", completed: false },
  { text: "ricoco", completed: false },
];

function App() {
  const {
    items: todos,
    setStorage: setTodo,
    loading,
    errores,
  } = useItem("todoinicial", []);

  const [serchvalue, setSerchvalue] = React.useState("");

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
      loading={loading}
      errores={errores}
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
