import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Konva from "konva";

import { CanvasStage, Toolbar, Sidebar, DiaryEditor } from "../features/canvas";
import { getRoomCanvas, saveRoomCanvas, submitRoom } from "../api/room";
import { uploadImage } from "../api/image";

import "../features/canvas/styles/canvas.css";

export default function CanvasPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();

  const stageRef = useRef<Konva.Stage | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ========================================
  // Room ID 확인
  // ========================================

  const numericRoomId = Number(roomId);

  // ========================================
  // 기존 작업 내용 불러오기
  // ========================================

  useEffect(() => {
    if (!roomId || Number.isNaN(numericRoomId)) {
      alert("잘못된 Room입니다.");
      navigate("/");
      return;
    }

    const loadRoomCanvas = async () => {
      try {
        setIsLoading(true);

        const data = await getRoomCanvas(numericRoomId);

        if (data.title) {
          setTitle(data.title);
        }

        if (data.content) {
          setContent(data.content);
        }

        console.log("기존 Canvas 데이터:", data.canvasData);
      } catch (error) {
        console.error("Canvas 불러오기 실패:", error);

        alert("그림일기 작업 공간을 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    loadRoomCanvas();
  }, [roomId, numericRoomId, navigate]);

  // ========================================
  // 현재 Canvas 데이터 생성
  // ========================================

  const getCanvasData = () => {
    const stage = stageRef.current;

    if (!stage) {
      throw new Error("Canvas를 찾을 수 없습니다.");
    }

    const dataUrl = stage.toDataURL({
      pixelRatio: 1,
    });

    if (!dataUrl) {
      throw new Error("Canvas 데이터를 생성하지 못했습니다.");
    }

    // data:image/png;base64, 부분 제거
    const base64 = dataUrl.includes(",") ? dataUrl.split(",")[1] : dataUrl;

    if (!base64) {
      throw new Error("Base64 Canvas 데이터를 생성하지 못했습니다.");
    }

    return base64;
  };

  // ========================================
  // 임시 저장
  // ========================================

  const handleSave = async () => {
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (!roomId || Number.isNaN(numericRoomId)) {
      alert("잘못된 Room입니다.");
      return;
    }

    try {
      setIsSaving(true);

      const canvasData = getCanvasData();

      await saveRoomCanvas(numericRoomId, {
        canvasData,
        title: title.trim(),
        content: content.trim(),
      });

      alert("임시 저장되었습니다.");
    } catch (error) {
      console.error("일기 임시 저장 실패:", error);

      alert("일기 저장에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  // ========================================
  // Diary 발행
  // ========================================

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (!roomId || Number.isNaN(numericRoomId)) {
      alert("잘못된 Room입니다.");
      return;
    }

    try {
      setIsSubmitting(true);

      // ========================================
      // 1. Canvas → Base64
      // ========================================

      const canvasData = getCanvasData();

      console.log("Canvas Base64 생성 완료");

      // ========================================
      // 2. 이미지 서버 업로드
      // ========================================

      console.log("이미지 업로드 시작");

      const { url: imageUrl } = await uploadImage(canvasData);

      console.log("업로드된 이미지 URL:", imageUrl);

      // ========================================
      // 3. Room Submit
      // ========================================

      await submitRoom(numericRoomId, {
        canvasData,
        title: title.trim(),
        content: content.trim(),

        // Base64가 아니라 서버에서 받은 URL
        finalImg: imageUrl,

        visibility: "PUBLIC",
        categoryId: null,
      });

      // ========================================
      // 4. 완료
      // ========================================

      alert("그림일기가 발행되었습니다!");

      navigate("/");
    } catch (error) {
      console.error("그림일기 발행 실패:", error);

      alert(
        error instanceof Error
          ? error.message
          : "그림일기 발행에 실패했습니다.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ========================================
  // Loading
  // ========================================

  if (isLoading) {
    return (
      <main className="canvas-page">
        <div className="canvas-shell">
          <div className="canvas-loading">그림일기를 불러오는 중...</div>
        </div>
      </main>
    );
  }

  // ========================================
  // Render
  // ========================================

  return (
    <main className="canvas-page">
      <div className="canvas-shell">
        {/* Header */}
        <header className="canvas-header">
          <div className="canvas-title">
            <div className="canvas-title-icon">✎</div>

            <span>그림일기 만들기</span>
          </div>

          <div className="canvas-header-status">
            <span className="canvas-status-dot" />

            <span>
              {isSaving ? "저장 중..." : isSubmitting ? "발행 중..." : "저장됨"}
            </span>
          </div>
        </header>

        {/* Body */}
        <div className="canvas-body">
          {/* Left Sidebar */}
          <aside className="canvas-sidebar">
            <Sidebar />
          </aside>

          {/* Workspace */}
          <section className="canvas-workspace">
            <div className="canvas-diary-book">
              {/* Drawing Page */}
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

              {/* Diary Page */}
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
                  onSubmit={handleSubmit}
                  isSaving={isSaving}
                  isSubmitting={isSubmitting}
                />

                <div className="canvas-page-footer">
                  <span className="canvas-save-status">● saved</span>

                  <span>02</span>
                </div>
              </section>
            </div>
          </section>

          {/* Toolbar */}
          <aside className="canvas-toolbar">
            <Toolbar />
          </aside>
        </div>
      </div>
    </main>
  );
}
