import { useCanvasStore } from "../store/canvasStore";

export default function ColorPicker() {
  const { color, setColor, addRecentColor } = useCanvasStore();

  return (
    <div className="color-picker">
      <div className="color-picker-preview">
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          onBlur={(e) => {
            addRecentColor(e.target.value);
          }}
        />

        <div
          className="color-picker-current"
          style={{
            backgroundColor: color,
          }}
        />
      </div>

      <span className="color-picker-value">{color.toUpperCase()}</span>
    </div>
  );
}
