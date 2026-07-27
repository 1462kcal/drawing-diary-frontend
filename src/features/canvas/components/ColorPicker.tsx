export default function ColorPicker() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <input
        type="color"
        defaultValue="#000000"
        style={{
          width: 120,
          height: 120,
          border: "none",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
