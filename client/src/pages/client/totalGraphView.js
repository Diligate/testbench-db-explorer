import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForceGraph2D from "react-force-graph-2d";

export default function TotalGraphView() {
  const [graph, setGraph] = useState({ nodes: [], links: [] });
  const [filter, setFilter] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const navigate = useNavigate();
  const fgRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5500/tables/graph/view")
      .then((r) => r.json())
      .then((d) => setGraph(d));
  }, []);

  const groups = useMemo(() => {
    const g = new Set(graph.nodes.map((n) => n.group));
    return ["All", ...Array.from(g.values())];
  }, [graph]);

  const filtered = useMemo(() => {
    const nodes = graph.nodes.filter((n) => {
      const byText = filter ? n.name.toLowerCase().includes(filter.toLowerCase()) : true;
      const byGroup = activeGroup === "All" ? true : n.group === activeGroup;
      return byText && byGroup;
    });
    const alive = new Set(nodes.map((n) => n.id));
    const links = graph.links.filter((l) => alive.has(l.source) && alive.has(l.target));
    return { nodes, links };
  }, [graph, filter, activeGroup]);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="p-3 bg-white shadow flex gap-3 items-center">
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
      <div className="flex-1 overflow-hidden p-2">
        <Legend />
        <div className="w-full h-full">
          <ForceGraph2D
            ref={fgRef}
            graphData={filtered}
            nodeId="id"
            nodeLabel={(n) => `${n.name}\nPKs: ${n.pkColumns?.join(", ") || "(none)"}\nFKs: ${n.fkCount || 0}`}
            linkDirectionalArrowLength={6}
            linkDirectionalArrowRelPos={1}
            linkLabel={(l) => `${l.fkColumn} -> ${l.target}${l.pkColumn ? ` (PK: ${l.pkColumn})` : ""}`}
            nodeAutoColorBy="group"
            onNodeClick={(node) => navigate(`/table/${node.name}`)}
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.name;
              const fontSize = 12 / Math.max(0.5, globalScale);
              ctx.font = `${fontSize}px Sans-Serif`;
              const textWidth = ctx.measureText(label).width;
              const bckgDimensions = [textWidth + 8, fontSize + 4];
              ctx.fillStyle = node.color || "#fff";
              ctx.beginPath();
              ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI, false);
              ctx.fill();
              ctx.lineWidth = 2;
              ctx.strokeStyle = "#333";
              ctx.stroke();
              ctx.fillStyle = "rgba(255,255,255,0.9)";
              ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - 12 - bckgDimensions[1] / 2, ...bckgDimensions);
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#111";
              ctx.fillText(label, node.x, node.y - 12);
              node.__bckgDimensions = bckgDimensions;
            }}
            nodePointerAreaPaint={(node, color, ctx) => {
              const bckgDimensions = node.__bckgDimensions || [0, 0];
              ctx.fillStyle = color;
              ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - 12 - bckgDimensions[1] / 2, ...bckgDimensions);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="mb-4 text-sm text-slate-700">
      <span className="inline-block w-3 h-3 bg-green-500 mr-2 align-middle"></span>
      PK column
      <span className="inline-block w-3 h-3 bg-blue-500 ml-4 mr-2 align-middle"></span>
      FK column
    </div>
  );
}

// no longer needed: grid view replaced by ForceGraph2D


