import Todo from "./Todo";

export default function SelectedProj({project, onDelete}) {

  let formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
      <div className="flex flex-col w-[35rem] mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-semibold">{project.title}</h1>
          <button className="p-2" onClick={() => onDelete(project.id)} >Delete</button>
        </div>
        <p className="my-3 text-xl text-gray-400">{formattedDate}</p>
        <p className="py-4 text-xl border-b-4 border-gray-300">{project.des}</p>
        <Todo />
      </div>
  );
}