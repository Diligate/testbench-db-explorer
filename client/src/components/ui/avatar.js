import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Avatar({ src }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu((pre) => !pre);
  };
  return (
    <div className="relative inline-block text-left">
      <div className="w-10 h-10">
        <button
          type="button"
          className=" flex items-center justify-center w-full rounded-full text-sm font-medium text-gray-700 "
          id="options-menu"
          onClick={handleToggle}
        >
          <img src={src} alt="avatar" className="w-10 h-10  rounded-full" />
        </button>
      </div>
      {toggleMenu ? (
        <div className="origin-top-right absolute right-0 mt-2 w-56 dark:bg-gray-800 rounded-md bg-white  border-neutral-900 ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="p-2 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <NavLink
              to="/app/profile"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform  rounded-lg text-white bg-orange-400 border-neutral-600 focus:shadow-outline"
                  : "inline-flex items-center w-full px-4 py-2 mt-1 text-base border-2 border-white border-dashed  rounded-lg hover:text-orange-500 hover:border-2 hover:border-dashed hover:border-orange-400  focus:shadow-outline hover:bg-white"
              }
              role="menuitem"
            >
              <span className="flex flex-row items-center">
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <span>Profile</span>
              </span>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-neutral-800 border-neutral-600 focus:shadow-outline"
                  : "inline-flex items-center w-full px-4 py-2 mt-1 text-base border-2 border-white border-dashed  rounded-lg hover:text-orange-500 hover:border-2 hover:border-dashed hover:border-orange-400  focus:shadow-outline hover:bg-white"
              }
              role="menuitem"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              <span className="flex flex-row items-center">
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-door-open-fill"
                    viewBox="0 0 16 16"
                  >
                    {"{"}" "{"}"}
                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                    {"{"}" "{"}"}
                  </svg>
                </span>
                <span>Sign out</span>
              </span>
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
