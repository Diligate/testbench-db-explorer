import { useRef, useState } from "react";

export default function InputFileJSON({ text, handleAction, handleOnSubmit }) {
  const inputRef = useRef(null);
  const [fileLoaded, setFileLoaded] = useState(false);

  const handleOnChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileLoaded(true); // mark as loaded
      handleAction(files); // pass files to parent
    } else {
      setFileLoaded(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileLoaded) {
      alert("Please select a JSON file first!");
      return;
    }
    handleOnSubmit(e);
    inputRef.current.value = "";
    setFileLoaded(false); // reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="file"
        name="file"
        accept=".json"
        multiple
        className="px-8 py-3 font-semibold capitalize rounded-md bg-white border-2 border-orange-400 text-orange-400 hover:bg-white h-14"
        ref={inputRef}
        onChange={handleOnChange}
      />
      <button
        type="submit"
        className="px-6 py-3 ml-3 font-semibold capitalize rounded-md bg-orange-400 text-neutral-100 hover:bg-orange-500 h-12"
      >
        {text}
      </button>
      {fileLoaded && (
        <span className="ml-4 text-green-600 font-semibold">
          File loaded successfully!
        </span>
      )}
    </form>
  );
}
