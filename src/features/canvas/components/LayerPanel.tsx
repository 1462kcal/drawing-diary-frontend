import LayerItem from "./LayerItem";

import { useCanvasStore } from "../store/canvasStore";

export default function LayerPanel() {
  const {
    layers,
    selectedLayerId,
    selectLayer,
    addLayer,
    removeLayer,

    toggleLayerVisibility,
    setLayerOpacity,

    moveLayerUp,
    moveLayerDown,
  } = useCanvasStore();

  const selectedLayer = layers.find((layer) => layer.id === selectedLayerId);

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
        {layers.map((layer, index) => (
          <LayerItem
            key={layer.id}
            name={layer.name}
            selected={layer.id === selectedLayerId}
            visible={layer.visible}
            onClick={() => selectLayer(layer.id)}
            onToggleVisibility={() => toggleLayerVisibility(layer.id)}
            onDelete={() => removeLayer(layer.id)}
            onMoveUp={() => moveLayerUp(layer.id)}
            onMoveDown={() => moveLayerDown(layer.id)}
            canMoveUp={index > 0}
            canMoveDown={index < layers.length - 1}
          />
        ))}
      </div>

      {/* 레이어 투명도 */}
      {selectedLayer && (
        <div
          style={{
            marginTop: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <span>레이어 투명도</span>

            <span>{selectedLayer.opacity}%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={selectedLayer.opacity}
            onChange={(e) =>
              setLayerOpacity(selectedLayer.id, Number(e.target.value))
            }
            style={{
              width: "100%",
            }}
          />
        </div>
      )}

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
