import LayerItem from "./LayerItem";

export default function LayerPanel() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
      }}
    >
      <p style={{ marginBottom: 10 }}>레이어</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <LayerItem name="레이어 1" editable />

        <LayerItem name="레이어 2" />

        <LayerItem name="레이어 3" />

        <LayerItem name="레이어 4" />
      </div>

      <button
        style={{
          marginTop: 12,
          width: "100%",
          padding: 10,
        }}
      >
        + AI 가이드 추가하기
      </button>
    </div>
  );
}
