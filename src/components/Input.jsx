export default function Input({title, type}) {

  let cls = "w-full p-1 rounded-sm border border-stone-300 bg-stone-200 text-stone-600 outline-none focus:border-stone-800";

  let txtArea = false;
  if(!type) {
    txtArea = true;
  }

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{title}</label>
      {txtArea? <textarea rows={5} className={cls}></textarea> : <input className={cls} type={type} />}
    </p>
  )
}