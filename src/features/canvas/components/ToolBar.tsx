import ToolButton from "./ToolButton";
import BrushSlider from "./BrushSlider";

import { Undo2, Redo2, Pen, Eraser, Pipette, PaintBucket } from "lucide-react";

export default function Toolbar() {
  return (
    <aside
      style={{
        width: 230,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* ===== 도구 ===== */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fff",
        }}
      >
        {/* Undo / Redo */}
        <div
          style={{
            display: "flex",
            gap: 6,
          }}
        >
          <ToolButton>
            <Undo2 size={18} />
          </ToolButton>

          <ToolButton>
            <Redo2 size={18} />
          </ToolButton>
        </div>

        {/* Drawing Tools */}
        <div
          style={{
            display: "flex",
            gap: 6,
          }}
        >
          <ToolButton active>
            <Pen size={18} />
          </ToolButton>

          <ToolButton>
            <Eraser size={18} />
          </ToolButton>

          <ToolButton>
            <Pipette size={18} />
          </ToolButton>

          <ToolButton>
            <PaintBucket size={18} />
          </ToolButton>
        </div>
      </div>

      {/* ===== 브러시 설정 ===== */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          background: "#fff",
        }}
      >
        <BrushSlider label="브러시 크기" min={1} max={30} />

        <BrushSlider label="투명도" min={0} max={100} />
      </div>
    </aside>
  );
}
