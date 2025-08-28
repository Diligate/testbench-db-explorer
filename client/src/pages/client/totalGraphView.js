import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForceGraph2D from "react-force-graph-2d";

export default function TotalGraphView() {
  const [graph, setGraph] = useState({ nodes: [], links: [] });
  const [filter, setFilter] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const navigate = useNavigate();
  const fgRef = useRef();

  // Fetch graph data
  useEffect(() => {
    fetch("http://localhost:5500/tables/graph/view")
      .then((r) => r.json())
      .then((d) => setGraph(d));
  }, []);

  // Unique groups for filter dropdown
  const groups = useMemo(() => {
    const g = new Set(graph.nodes.map((n) => n.group));
    return ["All", ...Array.from(g.values())];
  }, [graph]);

  // Filter nodes and links
  const filtered = useMemo(() => {
    let nodes = graph.nodes.filter((n) => {
      const byText = filter ? n.name.toLowerCase().includes(filter.toLowerCase()) : true;
      const byGroup = activeGroup === "All" ? true : n.group === activeGroup;
      return byText && byGroup;
    });

    // Improve clarity: include neighbors for "All"
    if (activeGroup === "All") {
      const neighborIds = new Set(nodes.map(n => n.id));
      graph.links.forEach(l => {
        const srcId = typeof l.source === "object" ? l.source.id : l.source;
        const tgtId = typeof l.target === "object" ? l.target.id : l.target;
        if (neighborIds.has(srcId) || neighborIds.has(tgtId)) {
          neighborIds.add(srcId);
          neighborIds.add(tgtId);
        }
      });
      nodes = graph.nodes.filter(n => neighborIds.has(n.id));
    }

    const alive = new Set(nodes.map((n) => n.id));
    const links = graph.links.filter((l) => {
      const sourceId = typeof l.source === "object" ? l.source.id : l.source;
      const targetId = typeof l.target === "object" ? l.target.id : l.target;
      return alive.has(sourceId) && alive.has(targetId);
    });

    return { nodes, links };
  }, [graph, filter, activeGroup]);

  // ForceGraph spacing
  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("charge").strength(-400);
      fgRef.current.d3Force("link").distance(150);
    }
  }, [filtered]);

  // Zoom controls
  const handleZoomIn = () => fgRef.current?.zoom(fgRef.current.zoom() * 1.2, 400);
  const handleZoomOut = () => fgRef.current?.zoom(fgRef.current.zoom() / 1.2, 400);
  const handleZoomToFit = () => fgRef.current?.zoomToFit(400, 100);

  return (
    <div className="flex flex-col w-screen h-screen bg-white relative">
      {/* Header / Filters */}
      <div className="p-3 bg-white shadow flex gap-3 items-center z-10">
        <input
          className="border rounded px-3 py-2 w-80"
          placeholder="Filter tables"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2"
          value={activeGroup}
          onChange={(e) => setActiveGroup(e.target.value)}
        >
          {groups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <Link to="/home" className="ml-auto text-blue-600 underline">
          Back
        </Link>
      </div>



      {/* Zoom controls */}
      <div className="absolute top-20 right-3 flex flex-col gap-2 z-10">
        <button onClick={handleZoomIn} className="px-2 py-1 bg-gray-700 text-white rounded shadow">+</button>
        <button onClick={handleZoomOut} className="px-2 py-1 bg-gray-700 text-white rounded shadow">-</button>
        <button onClick={handleZoomToFit} className="px-2 py-1 bg-gray-700 text-white rounded shadow text-xs">Fit</button>
      </div>

      {/* Graph */}
      <div className="flex-1 relative p-2">
        <ForceGraph2D
          ref={fgRef}
          graphData={filtered}
          nodeId="id"
          nodeLabel={(n) =>
            `${n.name}\nPKs: ${n.pkColumns?.join(", ") || "(none)"}\nFKs: ${n.fkCount || 0}`
          }
          linkDirectionalArrowLength={6}
          linkDirectionalArrowRelPos={1}
          linkCurvature={0.25}
          nodeAutoColorBy="group"
          onNodeClick={(node) => navigate(`/table/${node.name}`)}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.name;
            const fontSize = 14 / Math.max(0.5, globalScale);

            ctx.beginPath();
            ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = node.color || "#f97316";
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#333";
            ctx.stroke();

            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillStyle = "#111";
            ctx.fillText(label, node.x, node.y + 12);
          }}
        />
      </div>
    </div>
  );
}

