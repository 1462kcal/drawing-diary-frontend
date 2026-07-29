import type { ReactNode } from "react";

interface ToolButtonProps {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function ToolButton({
  children,
  active = false,
  disabled = false,
  onClick,
}: ToolButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 38,
        height: 38,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 6,

        border: active ? "2px solid #222" : "1px solid #ccc",

        background: active ? "#f3f3f3" : "#fff",

        opacity: disabled ? 0.4 : 1,

        cursor: disabled ? "default" : "pointer",
      }}
    >
      {children}
    </button>
  );
}
