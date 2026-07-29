import { Undo2, Redo2, Pen, Eraser, Pipette, PaintBucket } from "lucide-react";

import ToolButton from "./ToolButton";
import BrushSlider from "./BrushSlider";

import { useCanvasStore } from "../store/canvasStore";

export default function Toolbar() {
  const { tool, setTool, brushSize, setBrushSize, opacity, setOpacity } =
    useCanvasStore();

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
          borderRadius: 8,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          background: "#fff",
        }}
      >
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 8,
          }}
        >
          <ToolButton active={tool === "pen"} onClick={() => setTool("pen")}>
            <Pen size={18} />
          </ToolButton>

          <ToolButton
            active={tool === "eraser"}
            onClick={() => setTool("eraser")}
          >
            <Eraser size={18} />
          </ToolButton>

          <ToolButton
            active={tool === "eyedropper"}
            onClick={() => setTool("eyedropper")}
          >
            <Pipette size={18} />
          </ToolButton>

          <ToolButton
            active={tool === "bucket"}
            onClick={() => setTool("bucket")}
          >
            <PaintBucket size={18} />
          </ToolButton>
        </div>
      </div>

      {/* ===== 브러시 설정 ===== */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          background: "#fff",
        }}
      >
        <BrushSlider
          label="브러시 크기"
          min={1}
          max={30}
          value={brushSize}
          onChange={setBrushSize}
        />

        <BrushSlider
          label="투명도"
          min={0}
          max={100}
          value={opacity}
          onChange={setOpacity}
        />
      </div>
    </aside>
  );
}
