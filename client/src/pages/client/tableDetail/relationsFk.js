import { Link } from "react-router-dom";

export default function RelationsFk(attributes, table) {
  const col = attributes
    .map((relation, index) => {
      if (relation.fTable) {
        return (
          <div
            className="border-[#3e9688] border-2 border-dashed w-full rounded-3xl h-28 flex items-center justify-center p-3 px-5 "
            key={index * 3}
          >
            <div className="flex flex-col items-center justify-center z-20">
              <div className="bg-[#3e9688] rounded-xl p-3 w-36 min-w-max">
                <p className="text-sm sm:text-base text-center text-white">
                  {table.name}
                </p>
              </div>
              <p className="text-sm sm:text-base text-[#3e9688]">
                {relation.name}
              </p>
            </div>
            <span className="inline-block w-56 h-1 bg-[#3e9688] -mx-4 mb-6 rounded-full z-0"></span>
            <div className="flex flex-col items-center justify-center z-20 text-white">
              <Link to={`/table/${relation.fTable}`} replace="false">
                <div className="bg-[#3e9688] rounded-xl p-3 w-36 min-w-max">
                  <p className="text-sm sm:text-base text-center">
                    {relation.fTable}
                  </p>
                </div>
              </Link>
              <p className="text-sm sm:text-base text-[#3e9688]">
                {relation.pColumn}
              </p>
            </div>
          </div>
        );
      }
      return null;
    })
    .filter(Boolean);

  return col;
}
