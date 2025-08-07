export default function WhiteButton({ text, handleAction }) {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold capitalize rounded-md bg-neu10 text-[#07b4a3] border-2 border-[#07b4a3] hover:text-white hover:bg-[#07b4a3] h-14"
      onClick={() => handleAction((prev) => !prev)}
    >
      {text}
    </button>
  );
}
