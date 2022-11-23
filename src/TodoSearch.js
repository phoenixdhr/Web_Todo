import React from 'react'
import "./TodoSearch.css"






function TodoSearch() {

  
const [serchvalue, setSerchvalue] = React.useState("");

const onSearchValueChange=(event)=>{
  console.log(event.target.value);
  setSerchvalue(event.target.value)
}


  return [
        <input 
            className="TodoSearch" 
            placeholder="Cebollapichi"

            onChange={onSearchValueChange}

        ></input>,

        <p>{serchvalue}</p>
  ]
   


  
}

export {TodoSearch}