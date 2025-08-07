export default function Modal({ title, text, icon, setShown, setId, setOk }) {
  return (
    <div
      data-test="test"
      className="absolute  left-1/4 md:left-1/3 top-1/3 z-50 bg-white flex flex-col max-w-sm min-w-min w-1/4 md:3/4  gap-2  rounded-3xl border-4 border-[#12a596] text-gray-800 justify-center items-center overflow-x-hidden"
    >
      <div className="p-3 flex flex-col justify-center items-center">
        {icon && (
          <span className="w-12 h-12 fill-orange-400 stroke-0">{icon}</span>
        )}
        <h2 className="text-xl font-semibold leading-tight tracking-wide text-center mt-1">
          {title}
        </h2>
        <p className="flex-1 text-gray-600 text-center mt-3 w-72">{text}</p>
      </div>
      <div className="flex flex-row justify-center w-full gap-0 mt-2 border-t-2 border-[#009688] m-0  sm:flex-row p-1">
        <button
          className="px-6 py-2 w-full border-r-2 text-[#009688] border-[#009688] hover:font-medium"
          onClick={() => {
            setShown((prev) => !prev);
            setId(null);
          }}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 text-[#009688] w-full hover:font-medium "
          onClick={() => {
            setShown((prev) => !prev);
            setOk((prev) => !prev);
          }}
        >
          Agree
        </button>
      </div>
    </div>
  );
}
