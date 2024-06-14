import { useImperativeHandle } from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import { createPortal } from 'react-dom';

let Dialog = forwardRef(function Dialog({}, ref) {
  let dialog = useRef();

  // add custom animation.

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className="bg-red-200 text-red-900 py-3 px-5 rounded mt-10 backdrop:bg-black backdrop:bg-opacity-80">
      <p className="text-3xl">Please fill all details!!</p>

      <form method="dialog" className="flex justify-end">
        <button className="bg-white px-2 text-lg mt-3 rounded">Close</button>
      </form>
    </dialog>, document.querySelector("#modal-root")
  );
})

export default Dialog;