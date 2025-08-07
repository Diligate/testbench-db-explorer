export default function Pagination({
  elementParPage,
  totalElements,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalElements / elementParPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className="w-full p-4 border border-orange-500 text-base rounded-l-xl text-white bg-orange-500 hover:bg-orange-400 hover:text-white hover:border-x-orange-500 border-r-orange-400"
          onClick={() => (currentPage > 1 ? paginate(currentPage - 1) : "")}
        >
          <svg
            width={9}
            fill="currentColor"
            height={8}
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
          </svg>
        </button>
        {pageNumbers.map((num) => {
          return num === currentPage ? (
            <button
              type="button"
              className="w-full px-4 py-2 border-t border-b text-base text-orange-500 bg-white border-x-white hover:bg-white  hover:border-x-orange-500 border-orange-500 "
              onClick={() => paginate(num)}
              key={num}
            >
              {num}
            </button>
          ) : (
            <button
              key={num}
              type="button"
              className="w-full px-4 py-2 border-t border-b border-r text-base text-white bg-orange-500 hover:bg-orange-400 hover:text-white hover:border-x hover:border-x-orange-400 border-orange-500 border-x-orange-400"
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          );
        })}

        <button
          type="button"
          className="w-full p-4 border border-l-0 text-base  rounded-r-xl text-white bg-orange-500 hover:bg-orange-400 hover:text-white hover:border-x-orange-500 border-orange-500"
          onClick={() =>
            currentPage < pageNumbers[pageNumbers.length - 1]
              ? paginate(currentPage + 1)
              : ""
          }
        >
          <svg
            width={9}
            fill="currentColor"
            height={8}
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
