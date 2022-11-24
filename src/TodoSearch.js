import React from 'react'
import "./TodoSearch.css"






function TodoSearch({serchvalue,setSerchvalue}) {

//  const serchvalue=props.serchvalue
//  const setSerchvalue=props.setSerchvalue


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