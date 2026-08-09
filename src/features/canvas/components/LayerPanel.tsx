import LayerItem from "./LayerItem";

import { useCanvasStore } from "../store/canvasStore";

export default function LayerPanel() {
  const { layers, selectedLayerId, selectLayer, addLayer, removeLayer } =
    useCanvasStore();

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
        {layers.map((layer) => (
          <LayerItem
            key={layer.id}
            name={layer.name}
            selected={layer.id === selectedLayerId}
            editable
            onClick={() => selectLayer(layer.id)}
            onDelete={() => removeLayer(layer.id)}
          />
        ))}
      </div>

      <button
        onClick={addLayer}
        style={{
          marginTop: 12,
          width: "100%",
          padding: 10,
        }}
      >
        + 레이어 추가
      </button>

      <button
        style={{
          marginTop: 6,
          width: "100%",
          padding: 10,
        }}
      >
        + AI 가이드 추가하기
      </button>
    </div>
  );
}
