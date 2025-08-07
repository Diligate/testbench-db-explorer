import { useState } from "react";

export default function Select() {
  const [isActive, setIsActive] = useState(false);
  const handelToggle = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="w-64">
      <div className="mt-1 relative">
        <button
          type="button"
          className="relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-pointer border-gray-900 border-2 sm:text-sm"
          onClick={handelToggle}
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">John Jackson</span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {isActive && (
          <div className="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg">
            <ul
              tabIndex={-1}
              role="listbox"
              id="category"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              <li
                id="listbox-item-0"
                role="option"
                aria-selected="true"
                className="text-gray-900 cursor-default hover:bg-gray-900 hover:text-white select-none relative py-2 pl-3 pr-9"
              >
                <div className="flex items-center">
                  <span className="ml-3 block font-normal truncate">
                    Mick Poulaz
                  </span>
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </li>
              <li
                id="listbox-item-1"
                role="option"
                aria-selected="false"
                className="text-gray-900 cursor-default select-none hover:bg-gray-900 hover:text-white relative py-2 pl-3 pr-9"
              >
                <div className="flex items-center">
                  <span className="ml-3 block font-normal truncate">
                    Julien Schiano
                  </span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
