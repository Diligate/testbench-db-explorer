import avatarImg from "../assets/images/avatar.png";
import Avatar from "../components/ui/avatar";
import logo from "../assets/images/logo.png";
import Search from "../components/form/searchBar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavbarAdmin({ setVal }) {
  const [show, setShow] = useState(false);
  return (
    <nav className="md:bg-white md:shadow-2xl border-b  m-0 bg-[#009688] ">
      <div className="container px-6 py-4 mx-auto ">
        <div className="md:flex md:items-start md:justify-start flex items-center">
          <div className="flex items-start justify-start md:hidden self-start">
            <NavLink
              to="/app/dashboard"
              className=" text-left focus:outline-none flex flex-row items-center "
            >
              <img src={logo} alt="logo" className="h-8" />
              <h2 className="block p-2 text-xl font-medium transition duration-500 ease-in-out transform cursor-pointer text-white hover:text-neutral-200 tracking-wider">
                TestBench-VS
              </h2>
            </NavLink>
          </div>
          <div className="flex-1 md:flex md:items-end  justify-end">
            <div className=" gap-3 mt-0 md:mt-0 md:flex md:items-end md:justify-end hidden">
              <Search setVal={setVal} />
              <Avatar src={avatarImg} />
            </div>
            <div className="relative flex-1 flex items-end justify-end md:hidden">
              <button
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 3.386719 7.164062 L 26.613281 7.164062 L 26.613281 22.40625 L 3.386719 22.40625 Z M 3.386719 7.164062 "
                        clipRule="nonzero"
                        fill="white"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="white"
                      d="M 3.398438 22.40625 L 26.601562 22.40625 L 26.601562 19.867188 L 3.398438 19.867188 Z M 3.398438 16.054688 L 26.601562 16.054688 L 26.601562 13.515625 L 3.398438 13.515625 Z M 3.398438 7.164062 L 3.398438 9.703125 L 26.601562 9.703125 L 26.601562 7.164062 Z M 3.398438 7.164062 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
              </button>
              {show && (
                <div className="absolute z-40 right-1 top-10 rounded-md bg-white border  w-56 md:hidden">
                  <nav>
                    <ul className="p-2">
                      <li>
                        <NavLink
                          to="/app/dashboard"
                          className={({ isActive }) =>
                            isActive
                              ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-500 border-orange-400 focus:shadow-outline"
                              : "inline-flex items-center w-full px-4 py-2 mt-1 text-base   rounded-lg text-neutral-900 hover:border-2 hover:border-dashed hover:border-orange-500 hover:text-orange-500 border-orange-500 focus:shadow-outline hover:bg-white"
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
                      <li>
                        <NavLink
                          to="/app/tables"
                          className={({ isActive }) =>
                            isActive
                              ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-500 border-orange-400 focus:shadow-outline"
                              : "inline-flex items-center w-full px-4 py-2 mt-1 text-base   rounded-lg text-neutral-900 hover:border-2 hover:border-dashed hover:border-orange-500 hover:text-orange-500 border-orange-500 focus:shadow-outline hover:bg-white"
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
                      <li>
                        <NavLink
                          to="/app/users"
                          className={({ isActive }) =>
                            isActive
                              ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-500 border-orange-400 focus:shadow-outline"
                              : "inline-flex items-center w-full px-4 py-2 mt-1 text-base   rounded-lg text-neutral-900 hover:border-2 hover:border-dashed hover:border-orange-500 hover:text-orange-500 border-orange-500 focus:shadow-outline hover:bg-white"
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
                      <li>
                        <NavLink
                          to="/app/profile"
                          className={({ isActive }) =>
                            isActive
                              ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-500 border-orange-400 focus:shadow-outline"
                              : "inline-flex items-center w-full px-4 py-2 mt-1 text-base   rounded-lg text-neutral-900 hover:border-2 hover:border-dashed hover:border-orange-500 hover:text-orange-500 border-orange-500 focus:shadow-outline hover:bg-white"
                          }
                        >
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
                          <span className="ml-4">Profile</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/app/settings"
                          className={({ isActive }) =>
                            isActive
                              ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-500 border-orange-400 focus:shadow-outline"
                              : "inline-flex items-center w-full px-4 py-2 mt-1 text-base   rounded-lg text-neutral-900 hover:border-2 hover:border-dashed hover:border-orange-500 hover:text-orange-500 border-orange-500 focus:shadow-outline hover:bg-white"
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
                      <li>
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            isActive
                              ? "inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-white bg-orange-500 border-orange-400 focus:shadow-outline"
                              : "inline-flex items-center w-full px-4 py-2 mt-1 text-base   rounded-lg text-neutral-900 hover:border-2 hover:border-dashed hover:border-orange-500 hover:text-orange-500 border-orange-500 focus:shadow-outline hover:bg-white"
                          }
                          onClick={() => {
                            localStorage.removeItem("token");
                          }}
                        >
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
                          <span className="ml-4">Log out</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
