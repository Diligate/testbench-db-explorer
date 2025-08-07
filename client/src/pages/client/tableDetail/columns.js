export default function Columns(attributes) {
  const col = attributes
    .map((attribute) => {
      return (
        <div
          className="flex justify-start items-start gap-3 border-t border-dashed  border-[#3e9688] p-1 px-2  w-full "
          key={attribute.id * 42}
        >
          <h2 className="w-36 sm:w-80 font-semibold text-sm sm:text-base">
            {attribute.name}
          </h2>
          <h3 className="w-44">{attribute.type}</h3>
          <p className="flex-1">
            {attribute.description
              ? attribute.description
              : "no description yet"}
          </p>
        </div>
      );
    })
    .filter(Boolean);
  return col;
}
