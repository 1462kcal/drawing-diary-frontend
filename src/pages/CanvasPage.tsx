import { useRef, useState } from "react";
import type Konva from "konva";

import { CanvasStage, Toolbar, Sidebar, DiaryEditor } from "../features/canvas";

import "../features/canvas/styles/canvas.css";

export default function CanvasPage() {
  const stageRef = useRef<Konva.Stage | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const stage = stageRef.current;

    if (!stage) {
      alert("그림을 불러오지 못했습니다.");
      return;
    }

    try {
      setIsSaving(true);

      // 현재 Canvas를 이미지로 변환
      const finalImg = stage.toDataURL({
        pixelRatio: 1,
      });

      console.log("제목:", title);
      console.log("내용:", content);
      console.log("그림:", finalImg);

      // TODO:
      // finalImg를 실제 이미지 URL로 업로드한 뒤
      // roomId와 함께 submit API 호출

      alert("현재는 그림 데이터 생성까지 완료!");
    } catch (error) {
      console.error("일기 저장 실패:", error);
      alert("일기 저장에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="canvas-page">
      <div className="canvas-shell">
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

        <div className="canvas-body">
          <aside className="canvas-sidebar">
            <Sidebar />
          </aside>

          <section className="canvas-workspace">
            <div className="canvas-diary-book">
              <section className="canvas-diary-page canvas-diary-page-left">
                <div className="canvas-page-heading">
                  <span className="canvas-page-label">DRAWING</span>

                  <span className="canvas-page-hint">draw your memory</span>
                </div>

                <div className="canvas-drawing-area">
                  <CanvasStage ref={stageRef} />
                </div>

                <div className="canvas-page-footer">
                  <span>my little drawing</span>
                  <span>01</span>
                </div>
              </section>

              <section className="canvas-diary-page canvas-diary-page-right">
                <div className="canvas-page-heading">
                  <span className="canvas-page-label">DIARY</span>

                  <span className="canvas-page-hint">write your memory</span>
                </div>

                <DiaryEditor
                  title={title}
                  content={content}
                  onTitleChange={setTitle}
                  onContentChange={setContent}
                  onSave={handleSave}
                  isSaving={isSaving}
                />

                <div className="canvas-page-footer">
                  <span className="canvas-save-status">● saved</span>

                  <span>02</span>
                </div>
              </section>
            </div>
          </section>

          <aside className="canvas-toolbar">
            <Toolbar />
          </aside>
        </div>
      </div>
    </main>
  );
}
