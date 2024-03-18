import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  const[task,setTask]=useState([]);
  const[newTask,setNewTask]=useState("");
function handleOnChange(e){
     setNewTask(e.target.value);
}
function handleOnClick(e){
  setTask([...task,newTask]);
  setNewTask(""); 
}
  return (
    <>
      <input type="text" value={newTask} onChange={handleOnChange}/>
      <button className="but1" onClick={handleOnClick}> Add item </button>
     
      <ul>
        {
          task.map((ele,ind)=>
          <li key={ind}> {ele}
          <button className="but1" onClick={()=>removeItem(ind)}>Remove item</button>
          </li>
          )
        }
      </ul>
    </>
  )
}

export default App
