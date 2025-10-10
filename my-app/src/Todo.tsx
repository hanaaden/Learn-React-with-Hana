import { useEffect, useState } from "react";
import "./App.css"


function Todo() {
  const [todos , setTodos] = useState<string[]>([])
  const [task , setTask] = useState('')

  useEffect(()=>{
    const stored = localStorage.getItem('todos');
    const storedTodos = stored ? JSON.parse(stored) : [];
    if(storedTodos){
        setTodos(storedTodos);
    }
  } , []);

  useEffect(()=>{
    localStorage.setItem('todos' , JSON.stringify(todos))
  } , [todos]);

  const handleAddTodo = ()=>{
    if(task.trim()!== ''){
        setTodos([...todos , task])
        setTask('')
    }
  }

  const hanleRemoveTodo = (index:number)=>{
         const newTodos = todos.filter((_ ,i)=>i !== index)
            setTodos(newTodos)
         
  } 
    return(
    <>
      <div className="App">
          <header className="App-header">
                <h1>Todo app</h1>
                <div className="todo">
                    <input
                    type="text"
                    placeholder="add a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={handleAddTodo}>
                        Add
                    </button>
                </div>
                <ul className="tasks">
                    {todos.map((todo , index)=>(
                        <li key={index}>
                            {todo}
                            <button onClick={()=>hanleRemoveTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
          </header>
      </div>
    </>
    )
  
}

export default Todo;
