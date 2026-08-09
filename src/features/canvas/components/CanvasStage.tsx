import { Stage, Layer, Line } from "react-konva";

import useCanvas from "../hooks/useCanvas";

export default function CanvasStage() {
  const { layers, startDrawing, draw, endDrawing } = useCanvas();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <Stage
        width={1000}
        height={700}
        onPointerDown={(e) => {
          e.evt.preventDefault();

          const stage = e.target.getStage();

          if (!stage) return;

          startDrawing(stage);
        }}
        onPointerMove={(e) => {
          e.evt.preventDefault();

          const stage = e.target.getStage();

          if (!stage) return;

          draw(stage);
        }}
        onPointerUp={(e) => {
          e.evt.preventDefault();

          endDrawing();
        }}
        onPointerLeave={endDrawing}
      >
        {layers.map((canvasLayer) => (
          <Layer key={canvasLayer.id} visible={canvasLayer.visible}>
            {canvasLayer.strokes.map((stroke) => (
              <Line
                key={stroke.id}
                points={stroke.points}
                stroke={stroke.color}
                strokeWidth={stroke.strokeWidth}
                opacity={stroke.opacity / 100}
                lineCap="round"
                lineJoin="round"
                tension={0.5}
                globalCompositeOperation={
                  stroke.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
          </Layer>
        ))}
      </Stage>
    </div>
  );
}
