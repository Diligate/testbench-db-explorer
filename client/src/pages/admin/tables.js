import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";
import TableAction from "../../components/ui/tableActionTable";
import { useEffect, useState } from "react";

export default function Tables() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allTables, setAllTables] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5500/tables")
      .then((res) => res.json())
      .then((data) => setAllTables(data));
  }, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const refreshCounts = () => {
    fetch("http://localhost:5500/tables/refresh", { method: "PATCH" })
      .then((r) => r.json())
      .then(() => {
        fetch("http://localhost:5500/tables")
          .then((res) => res.json())
          .then((data) => setAllTables(data));
      });
  };
  return (
    <div className="flex overflow-hidden h-screen w-screen">
      <SideBar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <NavbarAdmin setVal={handleChange} />
        <main className="relative flex-1 overflow-y-auto focus:outline-none bg-slate-50">
          <div className="py-6">
            <div className="px-4 mx-auto  sm:px-6 md:px-8 ">
              {/* Put your content here */}
              <div className="py-4">
                <div className="rounded-lg bg-white p-3">
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={refreshCounts}
                      className="px-3 py-1 text-sm rounded bg-teal-600 text-white hover:bg-teal-700"
                    >
                      Refresh counts
                    </button>
                  </div>
                  <TableAction
                    columns={[
                      "Name",
                      "total rows",
                      "total foreign key",
                      "description",
                      "action",
                    ]}
                    
                    rows={
                      // eslint-disable-next-line
                      allTables.filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })}
                    title="Tables"
                  />
                </div>
              </div>
              {/* Do not cross the closing tag underneath this coment*/}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
