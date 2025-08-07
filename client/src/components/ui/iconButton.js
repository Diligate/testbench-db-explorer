export default function IconButton({ svg, text }) {
  return (
    <button
      type="button"
      className="px-3 py-3 font-semibold capitalize flex flex-row justify-center items-center border-2 bg-white hover:bg-orange-500 hover:text-neutral-50 border-orange-500 text-orange-500 transition ease-in duration-200 h-12 shadow-md rounded-md "
    >
      <span className=" stroke-2 items-center">{svg}</span>
      <p className="mr-2 text-base">{text}</p>
    </button>
  );
}
