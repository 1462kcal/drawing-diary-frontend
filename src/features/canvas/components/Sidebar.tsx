import ColorPicker from "./ColorPicker";
import ColorPalette from "./ColorPalette";
import LayerPanel from "./LayerPanel";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 250,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        borderRight: "1px solid #ddd",
        background: "#fafafa",
      }}
    >
      <ColorPicker />

      <ColorPalette />

      <LayerPanel />
    </aside>
  );
}
