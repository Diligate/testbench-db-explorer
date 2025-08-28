import { NavLink } from "react-router-dom";
import avatarImg from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";

export default function SideBar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-[#009688]">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4">
            <NavLink
              to="/app/dashboard"
              className="px-8 text-left focus:outline-none flex flex-col items-center justify-center"
            >
              <img src={logo} alt="logo" className="h-12" />
              <h2 className="block p-2 text-xl font-medium transition duration-500 ease-in-out transform cursor-pointer text-white hover:text-neutral-200 tracking-wider">
                TestBench-VS
              </h2>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col flex-grow px-4 mt-5">
            <nav className="flex-1 space-y-1 bg-[#009688]">
              <ul>
                {/* Dashboard */}
                <li>
                  <NavLink
                    to="/app/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-400 border-orange-100 focus:shadow-outline"
                        : "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-white focus:shadow-outline hover:bg-orange-400"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                    <span className="ml-4">Dashboard</span>
                  </NavLink>
                </li>

                {/* Home */}
                <li>
                  <NavLink
                    to="http://localhost:3000/home"
                    className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-white focus:shadow-outline hover:bg-orange-400"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "http://localhost:3000/home";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0H7m6 0v6m0 6h6m-6 0H7"
                      />
                    </svg>
                    <span className="ml-4">Home</span>
                  </NavLink>
                </li>

                {/* Tables */}
                <li>
                  <NavLink
                    to="/app/tables"
                    className={({ isActive }) =>
                      isActive
                        ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-400 border-orange-100 focus:shadow-outline"
                        : "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-white focus:shadow-outline hover:bg-orange-400"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-4">Tables</span>
                  </NavLink>
                </li>

                {/* Users */}
                <li>
                  <NavLink
                    to="/app/users"
                    className={({ isActive }) =>
                      isActive
                        ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-400 border-orange-100 focus:shadow-outline"
                        : "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-white focus:shadow-outline hover:bg-orange-400"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="ml-4">Users</span>
                  </NavLink>
                </li>

                {/* Settings */}
                <li>
                  <NavLink
                    to="/app/settings"
                    className={({ isActive }) =>
                      isActive
                        ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-400 border-orange-100 focus:shadow-outline"
                        : "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-white focus:shadow-outline hover:bg-orange-400"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="ml-4">Settings</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Profile Section */}
          <div className="flex flex-shrink-0 p-4 px-4 bg-orange-400 border-t border-orange-500">
            <NavLink
              to="/app/profile"
              className="flex-shrink-0 block w-full group"
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block rounded-full h-9 w-9"
                    src={avatarImg}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-normal text-white capitalize">
                    {`${localStorage.getItem(
                      "lastName"
                    )} ${localStorage.getItem("firstName")}`}
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
