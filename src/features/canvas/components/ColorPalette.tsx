import { useCanvasStore } from "../store/canvasStore";

export default function ColorPalette() {
  const recentColors = useCanvasStore((state) => state.recentColors);

  const setColor = useCanvasStore((state) => state.setColor);

  return (
    <div className="color-palette">
      <div className="color-palette-label">최근 사용한 색</div>

      <div className="color-palette-grid">
        {Array.from({ length: 16 }).map((_, index) => {
          const color = recentColors[index];

          return (
            <button
              key={index}
              className={`color-swatch ${color ? "has-color" : "empty"}`}
              onClick={() => {
                if (color) {
                  setColor(color);
                }
              }}
              disabled={!color}
              style={{
                backgroundColor: color ?? undefined,
              }}
              aria-label={color ? `최근 색상 ${color}` : "비어 있는 색상"}
            />
          );
        })}
      </div>
    </div>
  );
}
