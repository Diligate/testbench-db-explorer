export default function RoundedIconButton({ svg, text, handleClick }) {
  return (
    <div className="flex flex-col justify-center items-center group m-0 pl-10 h-full ">
      <button
        type="submit"
        className="px-3 py-3 font-semibold capitalize flex justify-center items-center border-2 border-white bg-orange-500
         group-hover:bg-white  group-hover:border-orange-500 text-white transition ease-in duration-200 rounded-full overflow-visible "
        onClick={handleClick}
      >
        <span className="w-5 h-5 stroke-2">{svg}</span>
        <span className="ml-2 group-hover:text-orange-500">{text}</span>
      </button>
    </div>
  );
}
