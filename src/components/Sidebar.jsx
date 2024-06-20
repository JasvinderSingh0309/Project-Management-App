export default function Sidebar({onAdd, projects, onSelect, projId}) {
  return (
    <nav className="w-1/3 bg-black max-w-80 p-10 rounded-tr-2xl">
      <h2 className="uppercase text-white md:text-2xl mb-4 font-semibold">Your Projects</h2>
      <button className="px-3 py-2 bg-stone-500 text-stone-300 rounded-md text-xs md:text-base hover:bg-stone-600" onClick={onAdd}>+ Add Project</button>
      <ul className="text-white py-8 text-xl">
        {projects.map(proj => {
          let tailClass = "w-full hover:bg-stone-800 hover:text-stone-50 rounded-md py-2 px-3 text-left";

          if(proj.id === projId) {
            tailClass += " text-stone-50 bg-stone-800";
          }else {
            tailClass += " text-stone-300";
          }

          return <li key={proj.id}>
            <button onClick={onSelect} className={tailClass}>
              {proj.title}
            </button>
          </li>
        })}
      </ul>
    </nav>
  );
}