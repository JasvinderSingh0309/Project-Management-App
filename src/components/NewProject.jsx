import Input from "./Input";
import { useRef } from "react";

export default function NewProject() {
  let title = useRef();
  let des = useRef();
  let date = useRef();

  function handleInputValues() {
    console.log(title.current.value);
    console.log(des.current.value);
    console.log(date.current.value);
  }

  return (
    <div className="w-[35rem] mt-10">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button onClick={handleInputValues} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
      </menu>
      <div>
        <Input ref={title} title="Title" type="text"/>
        <Input ref={des} title="Description" />
        <Input ref={date} title="Date" type="date"/>
      </div>
    </div>
  );
}