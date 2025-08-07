import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";
import IconButton from "../../components/ui/iconButton";
import TableActionUsers from "../../components/ui/tableActionUsers";
export default function Users() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/users", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
  return (
    <div className="flex overflow-hidden h-screen w-screen">
      <SideBar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <NavbarAdmin />
        <main className="relative flex-1 overflow-y-auto focus:outline-none bg-slate-50">
          <div className="py-6">
            <div className="px-4 mx-auto  sm:px-6 md:px-8 ">
              {/* Put your content here */}
              <div className="py-4">
                <div className="rounded-lg bg-white p-3">
                  <div className="flex justify-end -mb-10 mt-3 mr-12 pr-1">
                    <Link to="/app/users/add">
                      <IconButton
                        text="add"
                        svg={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="mr-2 h-7"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
                          </svg>
                        }
                      />
                    </Link>
                  </div>
                  <TableActionUsers
                    columns={[
                      "id",
                      "first name",
                      "last name",
                      "email",
                      "action",
                    ]}
                    rows={allUsers}
                    title="Users"
                  />
                </div>
              </div>
              {/* Do not cross the closing tag underneath this comment*/}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
