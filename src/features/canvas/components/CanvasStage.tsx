import { Stage, Layer } from "react-konva";

export default function CanvasStage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Stage
        width={1000}
        height={700}
        style={{
          border: "1px solid #dcdcdc",
          backgroundColor: "#ffffff",
        }}
      >
        <Layer />
      </Stage>
    </div>
  );
}
