import { Stage, Layer, Line } from "react-konva";
import useCanvas from "../hooks/useCanvas";

export default function CanvasStage() {
  const { strokes, startDrawing, draw, endDrawing } = useCanvas();

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
          startDrawing(e.target.getStage()!);
        }}
        onPointerMove={(e) => {
          e.evt.preventDefault();
          draw(e.target.getStage()!);
        }}
        onPointerUp={(e) => {
          e.evt.preventDefault();
          endDrawing();
        }}
      >
        <Layer>
          {strokes.map((stroke) => (
            <Line
              key={stroke.id}
              points={stroke.points}
              stroke={stroke.color}
              strokeWidth={stroke.strokeWidth}
              opacity={stroke.opacity / 100}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
