export default function Sidebar({onAdd}) {
  return (
    <nav className="w-1/3 bg-black max-w-80 p-10 rounded-tr-2xl">
      <h2 className="uppercase text-white md:text-2xl mb-4 font-semibold">Your Projects</h2>
      <button className="px-3 py-2 bg-stone-500 text-stone-300 rounded-md text-xs md:text-base hover:bg-stone-600" onClick={onAdd}>+ Add Project</button>
      <ul className="text-white py-8 text-xl">
        <li>{}</li>
      </ul>
    </nav>
  );
}