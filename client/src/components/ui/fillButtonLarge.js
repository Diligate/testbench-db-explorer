export default function FillButtonLarge({ text, type }) {
  return (
    <button
      type={type}
      className="px-20 py-3 w-full font-semibold capitalize rounded-md bg-[#009688] text-neutral-100 hover:bg-[#009687d2]"

    >
      {text}
    </button>
  );
}
