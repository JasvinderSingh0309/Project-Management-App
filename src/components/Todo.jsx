import { useState } from "react";

export default function Todo() {
  // So, it works well now. But we need to manage todos according to projects being selected, now all projects have the same todos.
  
  const [value,  setValue] = useState("");
  const [todos,  setTodos] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleAddTodos() {
    if(value) {
      setTodos(prev => [...prev, value]);
    }
    setValue("");
  }

  function clearTodo(index) {
    setTodos(prev => prev.filter((e,i) => i !== index));
  }

  console.log(todos);

  return (
    <div>
      <h1 className="text-3xl font-bold py-4">Tasks</h1>
      <div>
        <input type="text" className=" outline-none bg-gray-300 p-2 w-1/2 text-xl rounded focus:border focus:border-black" onChange={handleChange} value={value} />
        <button className="ml-3" onClick={handleAddTodos}>Add task</button>
      </div>
      {!todos.length? <p className="text-lg mt-8">This project does not have any tasks yet.</p> : 
        <ul className="text-lg mt-8 bg-gray-200/60 px-5 py-7 rounded">{todos.map((e,i) => <li key={i}  className="flex justify-between items-center py-2 text-xl">{e} <button className=" text-base" onClick={() => clearTodo(i)}>Clear</button></li>)}</ul>
      }
    </div>
    
  )
}