export default function Project() {
  return (
    <div className="flex-1 flex flex-col items-center pt-20">
      <img src="./src/assets/no-projects.png" alt="no project logo" className="w-20"/>
      <h2 className=" text-amber-800 text-2xl font-bold mt-2">No Project Selected</h2>
      <p className="my-7 text-gray-500 text-lg">Select a project or get started with a new one</p>
      <button className="px-3 py-2 rounded-md bg-slate-800 text-slate-300">Create new project</button>
    </div>
  );
}