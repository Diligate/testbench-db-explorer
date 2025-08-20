import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [summary, setSummary] = useState([]);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5500/tables/graph/validate")
      .then((r) => r.json())
      .then((d) => {
        setSummary(d.summary || []);
        setIssues(d.issues || []);
      })
      .finally(() => setLoading(false));
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
                  <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="border rounded p-3">
                        <div className="font-medium mb-2">Schema health issues</div>
                        {issues.length === 0 ? (
                          <div className="text-sm text-slate-500">No issues detected</div>
                        ) : (
                          <ul className="text-sm list-disc pl-5">
                            {issues.map((it, idx) => (
                              <li key={idx}>
                                <span className="font-semibold">{it.table}</span>: {it.type} - {it.detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="border rounded p-3">
                        <div className="font-medium mb-2">Primary/Foreign keys summary</div>
                        <div className="max-h-80 overflow-auto">
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="text-left">
                                <th className="pr-3 pb-2">Table</th>
                                <th className="pr-3 pb-2">PK columns</th>
                                <th className="pr-3 pb-2">FK count</th>
                              </tr>
                            </thead>
                            <tbody>
                              {summary.map((s) => (
                                <tr key={s.table} className="border-t">
                                  <td className="pr-3 py-1">{s.table}</td>
                                  <td className="pr-3 py-1">{s.primaryKeyColumns?.join(", ") || "(none)"}</td>
                                  <td className="pr-3 py-1">{s.foreignKeyCount}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

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
