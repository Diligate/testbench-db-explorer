export default function RoundedButton({ text }) {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold capitalize rounded-full bg-neutral-800 text-neutral-100 hover:border-2 hover:border-neutral-900 hover:text-neutral-800 hover:bg-white"
    >
      {text}
    </button>
  );
}
