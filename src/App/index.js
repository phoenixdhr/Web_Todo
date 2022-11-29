
import "./App.css";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

const tododefault = [
  { text: "desayunar", completed: true },
  { text: "almorzar", completed: false },
  { text: "cenar", completed: true },
  { text: "lonche", completed: false },
  { text: "merienda", completed: false },
  { text: "ricoco", completed: false },
];

function App() {
  return (
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
  )
  
}

export default App;
