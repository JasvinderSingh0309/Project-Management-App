import { useState } from "react";

export default function Todo({tasks, onAdd, onDelete}) {
  // so to store tasks separately we need to store the tasks in the App component.
  const [value,  setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    if(value.trim()) {
      onAdd(value);
      setValue("");
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold py-4">Tasks</h1>
      <div>
        <input type="text" className=" outline-none bg-gray-300 p-2 w-1/2 text-xl rounded focus:border focus:border-black" onChange={handleChange} value={value} />
        <button className="ml-3" onClick={handleClick}>Add task</button>
      </div>
      {!tasks.length? <p className="text-lg mt-8">This project does not have any tasks yet.</p> : 
        <ul className="text-lg mt-8 bg-gray-200/60 px-5 py-7 rounded">{tasks.map((e,i) => <li key={i}  className="flex justify-between items-center py-2 text-xl">{e.todo} <button className="text-base hover:text-red-500" onClick={() => onDelete(e.id)}>Clear</button></li>)}</ul>
      }
    </div>
    
  )
}