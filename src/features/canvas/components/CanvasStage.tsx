import { useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Line } from "react-konva";
import useCanvas from "../hooks/useCanvas";

export default function CanvasStage() {
  const { strokes, startDrawing, draw, endDrawing } = useCanvas();

  const stageRef = useRef<Konva.Stage>(null);

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
        ref={stageRef}
        width={1000}
        height={700}
        onPointerDown={(e) => {
          e.evt.preventDefault();

          if (!stageRef.current) return;

          startDrawing(stageRef.current);
        }}
        onPointerMove={(e) => {
          e.evt.preventDefault();

          if (!stageRef.current) return;

          draw(stageRef.current);
        }}
        onPointerUp={(e) => {
          e.evt.preventDefault();
          endDrawing();
        }}
        onPointerLeave={endDrawing}
      >
        <Layer>
          {strokes.map((stroke) => (
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
      </Stage>
    </div>
  );
}
