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
    <div className="layer-panel">
      {/* 레이어 목록 */}
      <div className="layer-list">
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

      {/* 선택된 레이어 설정 */}
      {selectedLayer && (
        <div className="layer-opacity">
          <div className="layer-opacity-header">
            <span>투명도</span>

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
          />
        </div>
      )}

      {/* 레이어 추가 */}
      <button className="canvas-action-button" onClick={addLayer}>
        + 레이어 추가
      </button>

      {/* AI 가이드 */}
      <button className="canvas-action-button canvas-ai-button">
        ♡ AI 가이드 추가
      </button>
    </div>
  );
}
