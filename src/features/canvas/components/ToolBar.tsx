import { Undo2, Redo2, Pen, Eraser, Pipette, PaintBucket } from "lucide-react";

import ToolButton from "./ToolButton";
import BrushSlider from "./BrushSlider";

import { useCanvasStore } from "../store/canvasStore";

export default function Toolbar() {
  const {
    tool,
    setTool,

    brushSize,
    setBrushSize,

    opacity,
    setOpacity,

    undo,
    redo,

    undoStack,
    redoStack,
  } = useCanvasStore();

  return (
    <div className="canvas-toolbar-inner">
      {/* ======================================
          HISTORY
      ======================================= */}
      <section className="canvas-tool-panel">
        <div className="canvas-panel-titlebar">
          <span>HISTORY</span>

          <div className="canvas-panel-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="canvas-tool-panel-content">
          <div className="history-buttons">
            <ToolButton onClick={undo} disabled={undoStack.length === 0}>
              <Undo2 size={15} />
              <span>Undo</span>
            </ToolButton>

            <ToolButton onClick={redo} disabled={redoStack.length === 0}>
              <Redo2 size={15} />
              <span>Redo</span>
            </ToolButton>
          </div>
        </div>
      </section>

      {/* ======================================
          TOOLS
      ======================================= */}
      <section className="canvas-tool-panel">
        <div className="canvas-panel-titlebar">
          <span>TOOLS</span>

          <div className="canvas-panel-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="canvas-tool-panel-content">
          <div className="drawing-tools">
            <ToolButton active={tool === "pen"} onClick={() => setTool("pen")}>
              <Pen size={15} />
              <span>Pen</span>
            </ToolButton>

            <ToolButton
              active={tool === "eraser"}
              onClick={() => setTool("eraser")}
            >
              <Eraser size={15} />
              <span>Eraser</span>
            </ToolButton>

            <ToolButton
              active={tool === "eyedropper"}
              onClick={() => setTool("eyedropper")}
            >
              <Pipette size={15} />
              <span>Pick</span>
            </ToolButton>

            <ToolButton
              active={tool === "bucket"}
              onClick={() => setTool("bucket")}
            >
              <PaintBucket size={15} />
              <span>Fill</span>
            </ToolButton>
          </div>
        </div>
      </section>

      {/* ======================================
          BRUSH SETTINGS
      ======================================= */}
      <section className="canvas-tool-panel">
        <div className="canvas-panel-titlebar">
          <span>BRUSH</span>

          <div className="canvas-panel-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="canvas-tool-panel-content">
          <div className="brush-settings">
            <BrushSlider
              label="크기"
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
        </div>
      </section>
    </div>
  );
}
