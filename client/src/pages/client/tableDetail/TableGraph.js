import { useEffect, useMemo, useRef, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { useNavigate } from "react-router-dom";

export default function TableGraph({ graph, tableName, show, setShow, RelationsPk, RelationsFk }) {
  const fgRef = useRef();
  const navigate = useNavigate();
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  // Track mouse position for tooltip placement
  useEffect(() => {
    const handleMove = (e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Filter: main table + connected nodes, links only to/from main
  const filtered = useMemo(() => {
    if (!graph?.nodes || !graph?.links) return { nodes: [], links: [] };
    const main = graph.nodes.find(n => n.name === tableName);
    if (!main) return { nodes: [], links: [] };

    const neighbors = new Set([main.id]);
    const preliminaryLinks = graph.links.filter(l => {
      const srcId = typeof l.source === "object" ? l.source.id : l.source;
      const tgtId = typeof l.target === "object" ? l.target.id : l.target;
      if (srcId === main.id || tgtId === main.id) {
        neighbors.add(srcId);
        neighbors.add(tgtId);
        return true;
      }
      return false;
    });

    const links = preliminaryLinks.map(l => {
      const srcId = typeof l.source === "object" ? l.source.id : l.source;
      const tgtId = typeof l.target === "object" ? l.target.id : l.target;
      const srcNode = graph.nodes.find(n => n.id === srcId);
      const tgtNode = graph.nodes.find(n => n.id === tgtId);

      // Determine PK/FK properly using link data
      const isIncoming = tgtId === main.id;
      const pkTable = isIncoming ? srcNode : tgtNode;
      const fkTable = isIncoming ? tgtNode : srcNode;

      return {
        ...l,
        source: srcNode,
        target: tgtNode,
        srcName: srcNode?.name,
        tgtName: tgtNode?.name,
        pkColumns: [l.pkColumn || "(none)"], // take from link
        fkColumns: [l.fkColumn || "(none)"], // take from link
        relation: RelationsPk?.[`${pkTable?.name}->${fkTable?.name}`]
          || RelationsPk?.[`${fkTable?.name}->${pkTable?.name}`]
          || RelationsFk?.[`${pkTable?.name}->${fkTable?.name}`]
          || RelationsFk?.[`${fkTable?.name}->${pkTable?.name}`]
          || null,
      };
    });

    const nodes = graph.nodes.filter(n => neighbors.has(n.id));
    return { nodes, links };
  }, [graph, tableName, RelationsPk, RelationsFk]);

  // ForceGraph spacing
  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("charge").strength(-400);
      fgRef.current.d3Force("link").distance(200);
    }
  }, [filtered]);

  // Zoom controls
  const handleZoomIn = () => fgRef.current?.zoom(fgRef.current.zoom() * 1.2, 400);
  const handleZoomOut = () => fgRef.current?.zoom(fgRef.current.zoom() / 1.2, 400);
  const handleZoomToFit = () => fgRef.current?.zoomToFit(400, 100);

  return (
    <div className="w-full h-full bg-white rounded-lg shadow relative">
      {/* Header + toggle */}
      <div className="flex justify-center items-center mx-auto mb-5">
        <h3 className="px-6 text-xl italic">Graph view</h3>
        <label htmlFor="ShowGraph" className="relative w-16 h-8 cursor-pointer">
          <input
            type="checkbox"
            id="ShowGraph"
            className="sr-only peer"
            onChange={() => setShow(prev => !prev)}
            checked={show}
          />
          <span className="absolute inset-0 bg-orange-400 rounded-full transition peer-checked:bg-[#3e9688]" />
          <span className="absolute inset-0 w-6 h-6 m-1 bg-white rounded-full transition peer-checked:translate-x-8" />
        </label>
      </div>

      {show && (
        <div className="relative w-full h-full">
          {/* Zoom controls */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button onClick={handleZoomIn} className="px-2 py-1 bg-gray-700 text-white rounded shadow">+</button>
            <button onClick={handleZoomOut} className="px-2 py-1 bg-gray-700 text-white rounded shadow">-</button>
            <button onClick={handleZoomToFit} className="px-2 py-1 bg-gray-700 text-white rounded shadow text-xs">Fit</button>
          </div>

          {/* Tooltip */}
          {tooltip.visible && (
            <div
              className="absolute bg-white text-gray-800 text-xs px-3 py-2 rounded-lg shadow-lg border border-[#3e9688] pointer-events-none z-50"
              style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
            >
              {tooltip.text}
            </div>
          )}

          <ForceGraph2D
            ref={fgRef}
            graphData={filtered}
            nodeId="id"
            nodeLabel={n => `${n.name}\nPKs: ${n.pkColumns?.join(", ") || "(none)"}`}
            linkDirectionalArrowLength={6}
            linkDirectionalArrowRelPos={link => {
              // arrow at source for outgoing (green), at target for incoming (orange)
              const isIncoming = link.target.name === tableName;
              return isIncoming ? 1 : 0; // 1=end, 0=start
            }}
            linkCurvature={0.25}
            nodeAutoColorBy="group"
            enableZoomPanInteraction={false}
            onNodeClick={node => navigate(`/table/${node.name}`)}

            // Tooltip for links
            onLinkHover={link => {
              if (link) {
                const srcName = link.source.name || link.srcName;
                const tgtName = link.target.name || link.tgtName;
                const pkColumn = link.pkColumn || "(none)";
                const fkColumn = link.fkColumn || "(none)";

                setTooltip({
                  visible: true,
                  text: `${tgtName} ${pkColumn} ----> ${srcName} ForeignKey: ${fkColumn}`,
                  x: tooltip.x,
                  y: tooltip.y,
                });
              } else {
                setTooltip(prev => ({ ...prev, visible: false }));
              }
            }}

            linkColor={link => {
              const isIncoming = link.target.name === tableName;
              return isIncoming ? "#f59e0b" : "#16a34a"; // orange = incoming, green = outgoing
            }}
            linkWidth={2}

            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.name;
              const fontSize = 14 / Math.max(0.5, globalScale);

              ctx.beginPath();
              ctx.arc(node.x, node.y, node.name === tableName ? 12 : 8, 0, 2 * Math.PI, false);
              ctx.fillStyle = node.name === tableName ? "#f97316" : node.color || "#ccc";
              ctx.fill();
              ctx.strokeStyle = "#333";
              ctx.lineWidth = 2;
              ctx.stroke();

              ctx.font = `${fontSize}px Sans-Serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "top";
              ctx.fillStyle = "#111";
              ctx.fillText(label, node.x, node.y + 14);
            }}
          />
        </div>
      )}
    </div>
  );
}
