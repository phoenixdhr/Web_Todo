import React from "react";
import "./TodoSearch.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { serchvalue, setSerchvalue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSerchvalue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Cebollapichi"
      onChange={onSearchValueChange}
    ></input>,

    <p>{serchvalue}</p>,
  ];
}

export { TodoSearch };
