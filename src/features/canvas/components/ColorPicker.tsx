import { useCanvasStore } from "../store/canvasStore";

export default function ColorPicker() {
  const { color, setColor } = useCanvasStore();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <h4
        style={{
          margin: 0,
          fontSize: 14,
        }}
      >
        Color Picker
      </h4>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{
          width: 100,
          height: 100,
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
