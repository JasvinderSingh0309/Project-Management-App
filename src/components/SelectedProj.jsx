import Todo from "./Todo";

export default function SelectedProj() {
  return (
      <div className="flex flex-col w-[35rem] mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-semibold">Title</h1>
          <button className="p-2">Delete</button>
        </div>
        <p className="my-3 text-xl text-gray-400">Date</p>
        <p className="py-4 text-xl border-b-4 border-gray-300">Description</p>
        <Todo />
      </div>
  );
}