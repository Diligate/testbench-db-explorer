import { Link } from "react-router-dom";

export default function Card({ tableName, nbFk, id }) {
  return (
    <Link to={`/table/${tableName}`}>
      <div
        className="px-2 py-3 font-semibold capitalize rounded-lg group bg-white text-[#3e9688] border-2 border-[#2a7c6e]  hover:text-white hover:bg-[#3e9688] hover:border-0  border-dashed h-24 w-80 text-center cursor-pointer focus:outline-none focus:ring-0"
        key={tableName + "" + id}
      >
        <p className="text-lg text-center group-hover:text-xl text-[#2a7c6e] group-hover:text-white">
          {tableName}
        </p>
        <p className="text-base font-normal text-center text-[#2a7c6e] group-hover:text-white group-hover:text-xl mt-2">
          Rows : {nbFk}
        </p>
      </div>
    </Link>
  );
}
