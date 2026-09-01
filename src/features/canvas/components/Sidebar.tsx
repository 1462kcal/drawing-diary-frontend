import ColorPicker from "./ColorPicker";
import ColorPalette from "./ColorPalette";
import LayerPanel from "./LayerPanel";

export default function Sidebar() {
  return (
    <aside className="canvas-sidebar-inner">
      {/* 색상 선택 */}
      <section className="canvas-panel">
        <div className="canvas-panel-titlebar">
          <span>COLOR</span>
          <div className="canvas-panel-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="canvas-panel-content">
          <ColorPicker />
        </div>
      </section>

      {/* 최근 색상 */}
      <section className="canvas-panel">
        <div className="canvas-panel-titlebar">
          <span>PALETTE</span>
          <div className="canvas-panel-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="canvas-panel-content">
          <ColorPalette />
        </div>
      </section>

      {/* 레이어 */}
      <section className="canvas-panel canvas-layer-panel">
        <div className="canvas-panel-titlebar">
          <span>LAYERS</span>
          <div className="canvas-panel-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="canvas-panel-content">
          <LayerPanel />
        </div>
      </section>
    </aside>
  );
}
