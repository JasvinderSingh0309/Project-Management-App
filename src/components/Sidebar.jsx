export default function Sidebar() {
  return (
    <nav className="w-1/3 bg-black max-w-80 p-10 rounded-tr-2xl">
      <h2 className="uppercase text-white text-2xl mb-4 font-semibold">Your Projects</h2>
      <button className="px-3 py-2 bg-slate-800 text-slate-500 rounded-md">+ Add Project</button>
      <ul></ul>
    </nav>
  );
}