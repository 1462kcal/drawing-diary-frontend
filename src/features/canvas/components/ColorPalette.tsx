import { useCanvasStore } from "../store/canvasStore";

export default function ColorPalette() {
  const recentColors = useCanvasStore((state) => state.recentColors);

  const setColor = useCanvasStore((state) => state.setColor);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
      }}
    >
      <p style={{ marginBottom: 10 }}>최근 색상</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 6,
        }}
      >
        {Array.from({ length: 16 }).map((_, index) => {
          const color = recentColors[index];

          return (
            <button
              key={index}

              onClick={() => {
                if (color) {
                  setColor(color);
                }
              }}

              style={{
                width: 20,
                height: 20,

                border: "1px solid #aaa",

                background: color ?? "#eee",

                cursor: color ? "pointer" : "default",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
