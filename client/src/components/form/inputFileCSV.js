import { useRef } from "react";

export default function InputFileCSV({
  text,
  handleAction,
  handleOnSubmit,
}) {
  const inputRef = useRef(null);
  const handleOnChange = (e) => {
    handleAction(e.target.files);
  };
  return (
    <form>
      <input
        type="file"
        name="file"
        accept=".csv"
        multiple
        className="px-8 py-3 font-semibold capitalize rounded-md bg-white  border-2 border-orange-400 text-orange-400 hover:bg-white h-14"
        ref={inputRef}
        onChange={(e) => handleOnChange(e)}
      />
      <button
        type="submit"
        className="px-6 py-3 ml-3 font-semibold capitalize rounded-md bg-orange-400 text-neutral-100  hover:bg-orange-500 h-12"
        onClick={(e) => {
          handleOnSubmit(e);
          inputRef.current.value = "";
        }}
      >
        {text}
      </button>
    </form>
  );
}
