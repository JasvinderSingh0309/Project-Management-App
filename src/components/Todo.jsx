import { useState, useRef } from "react";

export default function Todo() {
  const [todos,  setTodos] = useState([]);
  let inputValue = useRef();
  
  function handleAddTasks() {
    if(inputValue.current.value) {
      setTodos(prev => [...prev, inputValue.current.value]);
    }
  }

  function clearTodo(index) {
    setTodos(prev => prev.filter((e,i) => i !== index));
  }

  console.log(todos);

  return (
    <div>
      <h1 className="text-3xl font-bold py-4">Tasks</h1>
      <div>
        <input ref={inputValue} type="text" className=" outline-none bg-gray-300 p-2 w-1/2 text-xl rounded focus:border focus:border-black"/>
        <button className="ml-3" onClick={handleAddTasks}>Add task</button>
      </div>
      {!todos.length? <p className="text-lg mt-8">This project does not have any tasks yet.</p> : 
        <ul className="text-lg mt-8 bg-gray-200/60 px-5 py-7 rounded">{todos.map((e,i) => <li key={i}  className="flex justify-between items-center py-2 text-xl">{e} <button className=" text-base" onClick={() => clearTodo(i)}>Clear</button></li>)}</ul>
      }
    </div>
    
  )
}