
import './App.css';
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import TodoList from "./TodoList";
import CreateTodoButton from "./CreateTodoButton";
import TodoItems  from "./TodoItems";

const todos = [
  {text:"desayunar", completed:true},
  {text:"almorzar", completed:false},
  {text:"cenar", completed:false},
  {text:"lonche", completed:false},
  {text:"merienda", completed:false},
  {text:"ricoco", completed:false}
]


function App() {
  return (
    <>
     <TodoCounter/>

     <TodoSearch/>


     <TodoList>
      {todos.map(todo=>(
        <TodoItems 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}    
        />
       ))}
     </TodoList>

    <CreateTodoButton/>
 

    </>
  );
}

export default App;
