import { Link } from "react-router-dom";

export default function RelationsPk(relationsP, attributes, table) {
  const col = relationsP
    .map((relation, index) => {
      const prAttribute = attributes
        .map((el) => {
          if (el.pKey) {
            return el;
          }
          return null;
        })
        .filter(Boolean);
      if (relation.fTable) {
        return (
          <div
            className=" bg-white border-[#3e9688]  border-2 border-dashed w-full rounded-3xl h-28 flex items-center justify-center p-3 "
            key={index * 7 + relation.id}
          >
            <div className="flex flex-col items-center justify-center z-20">
              <div className="bg-[#3e9688] rounded-xl p-3 w-36 min-w-max">
                <p className="text-center text-sm sm:text-base text-white">
                  {table.name}
                </p>
              </div>
              <p className="text-[#3e9688] text-sm sm:text-base">
                {prAttribute[0].name}
              </p>
            </div>
            <span className="inline-block w-56 h-1 bg-[#3e9688] -mx-4 mb-6 rounded-full "></span>
            <div className="flex flex-col items-center justify-center z-20  text-white">
              <Link to={`/table/${relation.tableName}`}>
                <div className="bg-[#3e9688] rounded-xl p-3 w-36 min-w-max">
                  <p className="text-sm sm:text-base text-center">
                    {relation.tableName}
                  </p>
                </div>
              </Link>

              <p className="text-[#3e9688] text-sm sm:text-base">
                {relation.name}
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
