import type { ChangeEvent } from "react";

interface DiaryEditorProps {
  title: string;
  content: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  onSave: () => void;
  isSaving: boolean;
}

export default function DiaryEditor({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSave,
  isSaving,
}: DiaryEditorProps) {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onTitleChange(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onContentChange(e.target.value);
  };

  return (
    <div className="canvas-diary-editor">
      <div className="canvas-diary-date">2026. 09. 04</div>

      <input
        type="text"
        className="canvas-diary-title-input"
        placeholder="오늘의 제목..."
        value={title}
        onChange={handleTitleChange}
        disabled={isSaving}
      />

      <textarea
        className="canvas-diary-textarea"
        placeholder="오늘 있었던 일을 적어보세요..."
        value={content}
        onChange={handleContentChange}
        disabled={isSaving}
      />

      <button
        type="button"
        className="canvas-diary-save-button"
        onClick={onSave}
        disabled={isSaving || !title.trim() || !content.trim()}
      >
        {isSaving ? "저장 중..." : "저장"}
      </button>
    </div>
  );
}
