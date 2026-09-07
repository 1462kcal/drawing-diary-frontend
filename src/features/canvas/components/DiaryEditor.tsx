import type { ChangeEvent } from "react";

interface DiaryEditorProps {
  title: string;
  content: string;

  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;

  onSave: () => void;
  onSubmit: () => void;

  isSaving: boolean;
  isSubmitting: boolean;
}

export default function DiaryEditor({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSave,
  onSubmit,
  isSaving,
  isSubmitting,
}: DiaryEditorProps) {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onTitleChange(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onContentChange(e.target.value);
  };

  const isDisabled = isSaving || isSubmitting;

  return (
    <div className="canvas-diary-editor">
      <div className="canvas-diary-date">2026. 09. 07</div>

      <input
        type="text"
        className="canvas-diary-title-input"
        placeholder="오늘의 제목..."
        value={title}
        onChange={handleTitleChange}
        disabled={isDisabled}
      />

      <textarea
        className="canvas-diary-textarea"
        placeholder="오늘 있었던 일을 적어보세요..."
        value={content}
        onChange={handleContentChange}
        disabled={isDisabled}
      />

      <div className="canvas-diary-actions">
        <button
          type="button"
          className="canvas-diary-save-button"
          onClick={onSave}
          disabled={isDisabled || !title.trim() || !content.trim()}
        >
          {isSaving ? "저장 중..." : "임시 저장"}
        </button>

        <button
          type="button"
          className="canvas-diary-submit-button"
          onClick={onSubmit}
          disabled={isDisabled || !title.trim() || !content.trim()}
        >
          {isSubmitting ? "발행 중..." : "일기 발행"}
        </button>
      </div>
    </div>
  );
}
