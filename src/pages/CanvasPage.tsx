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

        {/* 작업 영역 */}
        <div className="canvas-body">
          {/* 왼쪽 도구 */}
          <aside className="canvas-sidebar">
            <Sidebar />
          </aside>

          {/* 가운데 펼친 일기장 */}
          <section className="canvas-workspace">
            <div className="canvas-diary-book">
              {/* ============================
                  왼쪽 페이지 : DRAWING
              ============================= */}
              <section className="canvas-diary-page canvas-diary-page-left">
                <div className="canvas-page-heading">
                  <span className="canvas-page-label">DRAWING</span>

                  <span className="canvas-page-hint">draw your memory</span>
                </div>

                <div className="canvas-drawing-area">
                  <CanvasStage />
                </div>

                <div className="canvas-page-footer">
                  <span>my little drawing</span>
                  <span>01</span>
                </div>
              </section>

              {/* ============================
                  오른쪽 페이지 : DIARY
              ============================= */}
              <section className="canvas-diary-page canvas-diary-page-right">
                <div className="canvas-page-heading">
                  <span className="canvas-page-label">DIARY</span>

                  <span className="canvas-page-hint">write your memory</span>
                </div>

                <div className="canvas-diary-editor">
                  <div className="canvas-diary-date">2026. 09. 01</div>

                  <input
                    type="text"
                    className="canvas-diary-title-input"
                    placeholder="오늘의 제목..."
                  />

                  <textarea
                    className="canvas-diary-textarea"
                    placeholder="오늘 있었던 일을 적어보세요..."
                  />
                </div>

                <div className="canvas-page-footer">
                  <span className="canvas-save-status">● saved</span>

                  <span>02</span>
                </div>
              </section>
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
