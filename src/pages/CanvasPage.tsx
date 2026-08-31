import { CanvasStage, Toolbar, Sidebar } from "../features/canvas";

import "../features/canvas/styles/canvas.css";

export default function CanvasPage() {
  return (
    <main className="canvas-page">
      <div className="canvas-shell">
        {/* 상단 헤더 */}
        <header className="canvas-header">
          <div className="canvas-title">
            <div className="canvas-title-icon">✎</div>

            <span>그림일기 만들기</span>
          </div>

          <div className="canvas-header-status">
            <span className="canvas-status-dot" />
            <span>저장됨</span>
          </div>
        </header>

        {/* 캔버스 영역 */}
        <div className="canvas-body">
          {/* 왼쪽 도구 */}
          <aside className="canvas-sidebar">
            <Sidebar />
          </aside>

          {/* 가운데 작업 영역 */}
          <section className="canvas-workspace">
            <div className="canvas-paper">
              <CanvasStage />
            </div>
          </section>

          {/* 오른쪽 도구 */}
          <aside className="canvas-toolbar">
            <Toolbar />
          </aside>
        </div>
      </div>
    </main>
  );
}
