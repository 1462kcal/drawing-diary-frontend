const colors = [
  "#000000",
  "#FFFFFF",
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#30B0C7",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
  "#FF2D55",
  "#8E8E93",
  "#C7C7CC",
  "#A2845E",
  "#7DCEA0",
  "#AED6F1",
];

export default function ColorPalette() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
      }}
    >
      <p style={{ marginBottom: 10 }}>컬러 팔레트</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 6,
        }}
      >
        {colors.map((color) => (
          <button
            key={color}
            style={{
              width: 20,
              height: 20,
              border: "1px solid #aaa",
              background: color,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
