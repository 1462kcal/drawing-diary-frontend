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
    </div>
  );
}
