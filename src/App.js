import { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./components//header/AppBar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App =()=> {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddToList = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const toggleComplete =(id)=>{
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )

  }


  return (
    <div className="App">
      <NavBar />
      <TodoForm handleAddToList={handleAddToList} />
      <div>
        <h3>my to-do list</h3>
      </div>

      <div style={{ alignSelf:'center'}}>
        <TodoList todos={todos} toggleComplete={toggleComplete} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
