export default function Textarea({ name, val, setVal, disable }) {
  if (val === null) {
    val = "";
  }
  return (
    <div>
      <label htmlFor="input1" className="text-gray-700 capitalize">
        {name}
      </label>
      <textarea
        rows="4"
        cols="50"
        name={name}
        disabled={disable}
        id={name}
        value={val}
        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:capitalize mt-2"
        placeholder={`Enter your ${name}`}
        onChange={(e) => {
          setVal(e);
        }}
      ></textarea>
    </div>
  );
}
