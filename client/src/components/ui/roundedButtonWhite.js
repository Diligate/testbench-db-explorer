export default function RoundedButton({ text }) {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold capitalize rounded-full bg-white text-gray-900 hover:border-2 hover:border-white hover:text-white hover:bg-[#f39440]"
    >
      {text}
    </button>
  );
}
