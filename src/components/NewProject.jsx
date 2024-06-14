import Input from "./Input";
import Dialog from "./Dialog";
import { useRef } from "react";

export default function NewProject({onAdd, onCancel}) {
  let dialog = useRef();

  let title = useRef();
  let des = useRef();
  let date = useRef();

  function handleInputValues() {
    let enteredTitle = title.current.value;
    let enteredDes = des.current.value;
    let enteredDate = date.current.value;

    // validation...
    if(!enteredTitle.trim() || !enteredDes.trim() || !enteredDate.trim()) {
      dialog.current.open();
    }else{ // so instead of else block, it just returned;
      onAdd({
        title: enteredTitle,
        des: enteredDes,
        date: enteredDate,
      }); 
    }
  }

  return (<>
    <Dialog ref={dialog} />
    <div className="w-[35rem] mt-10">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
        <button onClick={handleInputValues} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
      </menu>
      <div>
        <Input ref={title} title="Title" type="text"/>
        <Input ref={des} title="Description" />
        <Input ref={date} title="Date" type="date"/>
      </div>
    </div></>
  );
}