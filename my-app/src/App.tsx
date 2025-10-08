import {  useState } from 'react'


import './App.css'

function App() {
 
const [count , setCount] = useState(0)
const [toggled , setToggled] = useState(false)
const [toDo , setToDo] = useState([
  "Learn React",
  "practice setUps",
  "push into github"
])
  return (
    <>
      <div className="contanier">
        <div className="card">
          <div className="card-body">
            <h1>counter app</h1>
            <div className="">
              <h2>{count}</h2>
              <button className='btn incre' onClick={()=> setCount(count+1)}>Increment</button>
              <button className='btn dec'  onClick={()=> setCount(count-1) } disabled={count===0}>decrement</button>
              <button className='btn res'  onClick={()=> setCount(0)} disabled={count===0}>Reset</button>
            </div>
          </div>
        </div>
      </div>

      <div className="app">
          
        <button
        className= {`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
        >
          <div className="thumb"></div>
        </button>
      </div>

      <div className="todo">
        <h1>My todo</h1>
        <ul>
          {toDo.map((toDo ,index)=>(
            <li key={index}>
              {toDo}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
