import exportFile from "../../utils/exportFile";

export default function FillButton({ text, handleAction, type, data }) {
  return (
    <button
      type={type}
      className="px-8 py-3 font-semibold capitalize rounded-md bg-orange-400 text-neutral-100 hover:border-2 hover:border-orange-400 hover:text-orange-400 hover:bg-white h-14"
      onClick={
        data
          ? () => exportFile(data)
          : handleAction
          ? () => handleAction((prev) => !prev)
          : null
      }
    >
      {text}
    </button>
  );
}
