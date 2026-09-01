import type { ReactNode } from "react";

interface ToolButtonProps {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

export default function ToolButton({
  children,
  onClick,
  active = false,
  disabled = false,
}: ToolButtonProps) {
  return (
    <button
      type="button"
      className={`canvas-tool-button ${active ? "active" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
