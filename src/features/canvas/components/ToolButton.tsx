import type { ReactNode } from "react";

interface ToolButtonProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function ToolButton({
  children,
  active = false,
  onClick,
}: ToolButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 38,
        height: 38,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        border: active ? "2px solid #222" : "1px solid #ccc",
        background: active ? "#f3f3f3" : "#fff",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      {children}
    </button>
  );
}
