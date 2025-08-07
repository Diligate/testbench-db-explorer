import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import Pagination from "./pagination";
import Alert from "./Alert";

import { TOAST } from "../../data/toast";

export default function TableActionUsers({ columns, rows, title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4);
  const [isShown, setIsShown] = useState(false);
  const [okDelete, setOkDelete] = useState(false);
  const [shown, setShown] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (okDelete) {
      fetch("http://localhost:5500/users/" + id, {
        method: "delete",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          rows.map((row, index) => {
            if (row.id === id) {
              rows.splice(index, 1);
            }
            return row;
          });
          setOkDelete(false);
          setId(null);
          setShown((prev) => [
            ...prev,
            <Alert
              title={TOAST.success.title}
              text="The user has been deleted successfully."
              svg={TOAST.success.svg}
            />,
          ]);
        })
        .catch(() => {
          setShown((prev) => [
            ...prev,
            <Alert
              title={TOAST.error.title}
              text="There was a problem! we can't delete the user for the moment."
              svg={TOAST.error.svg}
            />,
          ]);
        });
    }
  }, [okDelete]); // eslint-disable-line react-hooks/exhaustive-deps

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRow = rows.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const tableHeader = columns.map((column) => (
    <th
      scope="col"
      className="px-5 py-3 bg-[#07b4a3]  border-b border-[#07b4a3] text-white  text-left text-sm uppercase font-normal"
      key={column}
    >
      {column}
    </th>
  ));
  const tableRows = currentRow.map((row, index) => (
    <tr key={index}>
      <td className="px-5 py-5 border-b border-gray-900 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-900 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.firstname}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-900 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.lastname}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-900 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.email}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-900 bg-white text-sm">
        <span className="flex gap-2">
          <button
            className="group relative inline-block hover:fill-green-600 "
            disabled={isShown}
          >
            <Link to={`/app/users/${row.id}`}>
              <svg
                className="h-5 w-5  cursor-pointer  hover:stroke-green-300 "
                viewBox="0 0 20 20"
              >
                <path
                  className="  "
                  d="M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"
                ></path>
              </svg>
            </Link>
            <span className="absolute hidden group-hover:flex -left-2 -top-1 max-w-min  -translate-y-full px-2 py-1 bg-green-300 rounded-lg text-center text-white text-sm ">
              Edit
            </span>
          </button>

          <button
            className="group relative inline-block"
            onClick={() => {
              setIsShown((prev) => !prev);
              setId(row.id);
            }}
            disabled={isShown}
          >
            <svg className="h-5 w-5 hover:stroke-red-300" viewBox="0 0 20 20">
              <path
                className=""
                d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"
              ></path>
            </svg>
            <span className="absolute hidden group-hover:flex -left-5 -top-1 max-w-min  -translate-y-full px-2 py-1 bg-red-300 rounded-lg text-center text-white text-sm ">
              Delete
            </span>
          </button>
        </span>
      </td>
    </tr>
  ));
  return (
    <div className="container mx-auto px-4 sm:px-8 h-full overflow-x-hidden">
      <div className="fixed bottom-3 right-0 flex flex-col items-end gap-1 z-30">
        {shown}
      </div>
      {isShown && (
        <div>
          <span className="absolute top-0 left-0 m-0 p-0 bg-neutral-500 opacity-30  w-full h-screen"></span>
          <Modal
            text="Are you sure you want to delete this table?"
            setShown={setIsShown}
            setId={setId}
            setOk={setOkDelete}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>
      )}
      <div className="py-8">
        <h2 className=" text-2xl font-semibold leading-tight">{title}</h2>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full border-2 border-gray-900 rounded-lg overflow-hidden ">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr>{tableHeader}</tr>
              </thead>
              <tbody>{tableRows}</tbody>
            </table>
            <Pagination
              elementParPage={rowsPerPage}
              totalElements={rows.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
