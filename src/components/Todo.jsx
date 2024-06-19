export default function Todo() {
  return (
    <div>
      <h1 className="text-3xl font-bold py-4">Tasks</h1>
      <div>
        <input type="text" className=" outline-none bg-gray-300 p-2 w-1/2 text-xl rounded focus:border focus:border-black"/>
        <button className="ml-3">Add task</button>
      </div>
      {/* <p className="text-lg mt-8">This project does not have any tasks yet.</p> */}
      <ul className="text-lg mt-8 bg-gray-200/60 px-5 py-7 rounded">
        <li className="flex justify-between items-center py-1 text-xl">React <button className=" text-base">Clear</button></li>
        <li className="flex justify-between items-center py-1 text-xl">Sockets <button className=" text-base">Clear</button></li>
      </ul>
    </div>
    
  )
}