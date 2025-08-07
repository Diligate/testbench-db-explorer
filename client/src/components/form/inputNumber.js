export default function InputNumber({
  label,
  val,
  setVal,
  isRequired,
  name,
  disable,
}) {
  return (
    <div className=" relative flex flex-col">
      <label htmlFor={name} className="text-gray-700 capitalize">
        {label}
        {isRequired && <span className="text-red-500 required-dot">*</span>}
      </label>
      <input
        type="text"
        id={name}
        className=" rounded-lg border-transparent flex-1 appearance-none border border-orange-400  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:capitalize mt-2"
        name={name}
        placeholder={`${label}...`}
        value={val}
        disabled={disable}
        required={isRequired}
        onChange={(e) => {
          setVal(e);
        }}
      />
    </div>
  );
}
