export default function InputEmail({ label, val, setVal, isRequired, name }) {
  return (
    <div className=" relative ">
      <label htmlFor={name} className="text-gray-700 capitalize">
        {label}
        {isRequired && <span className="text-red-500 required-dot">*</span>}
      </label>
      <input
        type="email"
        id={name}
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:capitalize mt-2"
        name={name}
        placeholder={`${label}...`}
        value={val}
        required={isRequired}
        onChange={(e) => {
          setVal(e);
        }}
      />
    </div>
  );
}
