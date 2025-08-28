export default function ColumnsFk(attributes) {
  return attributes
    .map((column) => {
      if (column.fTable) {
        return (
          <div
            className="flex justify-start items-start gap-3 p-1 px-2 pr-6 rounded-lg w-full border-orange-600 border-2 border-dashed"
            key={column.id || `${column.name}-${column.fTable}`}
          >
            <h2 className="w-32 sm:w-44 font-semibold text-sm sm:text-base">
              {column.name}
            </h2>
            <h3 className="w-32 text-xs sm:text-base pl-6 pb-1">
              {column.constraintName || "No constraint name"}
            </h3>
          </div>
        );
      }
      return null;
    })
    .filter(Boolean);
}