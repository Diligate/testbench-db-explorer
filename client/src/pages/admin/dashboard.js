import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5500/tables/graph/validate")
      .then((r) => r.json())
      .then((d) => {
        setSummary(d.summary || []);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex overflow-hidden h-screen w-screen">
      <SideBar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <NavbarAdmin />
        <main className="relative flex-1 overflow-y-auto focus:outline-none bg-slate-50">
          <div className="py-6 px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                <div className="text-gray-500 text-sm">Total Tables</div>
                <div className="text-2xl font-bold text-gray-800">{summary.length}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                <div className="text-gray-500 text-sm">Total Foreign Keys</div>
                <div className="text-2xl font-bold text-gray-800">
                  {summary.reduce((acc, s) => acc + (s.foreignKeyCount || 0), 0)}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                <div className="text-gray-500 text-sm">Total Primary Keys</div>
                <div className="text-2xl font-bold text-gray-800">
                  {summary.reduce(
                    (acc, s) => acc + (s.primaryKeyColumns?.length || 0),
                    0
                  )}
                </div>
              </div>
            </div>

            {/* Summary Table */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Tables Summary</h2>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div className="overflow-auto max-h-96">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>
                        <th className="px-3 py-2 text-left">Table</th>
                        <th className="px-3 py-2 text-left">Primary Key Columns</th>
                        <th className="px-3 py-2 text-left">Foreign Key Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {summary.map((s) => (
                        <tr key={s.table} className="border-t hover:bg-gray-50">
                          <td className="px-3 py-1">{s.table}</td>
                          <td className="px-3 py-1">{s.primaryKeyColumns?.join(", ") || "(none)"}</td>
                          <td className="px-3 py-1">{s.foreignKeyCount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Additional Components */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
                <div className="text-sm text-gray-400 italic">No recent activity</div>
              </div>

              {/* Graph Overview */}
              <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                <h2 className="text-lg font-semibold mb-3">Graph Overview</h2>
                <div className="h-60 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg mb-4">
                  Graph Visualization Placeholder
                </div>
                <button
                  onClick={() => (window.location.href = "http://localhost:3000/graph")}
                  className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300"
                >
                  Go to Graph
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
