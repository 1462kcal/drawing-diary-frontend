import {
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface LayerItemProps {
  name: string;
  selected?: boolean;
  editable?: boolean;

  visible: boolean;

  onClick?: () => void;
  onToggleVisibility?: () => void;
  onDelete?: () => void;

  onMoveUp?: () => void;
  onMoveDown?: () => void;

  canMoveUp?: boolean;
  canMoveDown?: boolean;
}

export default function LayerItem({
  name,
  selected = false,
  editable = false,

  visible,

  onClick,
  onToggleVisibility,
  onDelete,

  onMoveUp,
  onMoveDown,

  canMoveUp = true,
  canMoveDown = true,
}: LayerItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        border: selected ? "2px solid #000" : "1px solid #ccc",

        padding: "8px 10px",

        background: selected ? "#f0f0f0" : "#fff",

        cursor: "pointer",
      }}
    >
      {/* 왼쪽 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {/* Visible */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleVisibility?.();
          }}
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {visible ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>

        {/* Thumbnail */}
        <div
          style={{
            width: 20,
            height: 20,
            background: "#ddd",
            border: "1px solid #ccc",
          }}
        />

        <span>{name}</span>
      </div>

      {/* 오른쪽 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* 위로 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMoveUp?.();
          }}
          disabled={!canMoveUp}
          style={{
            border: "none",
            background: "transparent",
            cursor: canMoveUp ? "pointer" : "default",
            opacity: canMoveUp ? 1 : 0.3,
          }}
        >
          <ChevronUp size={16} />
        </button>

        {/* 아래로 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMoveDown?.();
          }}
          disabled={!canMoveDown}
          style={{
            border: "none",
            background: "transparent",
            cursor: canMoveDown ? "pointer" : "default",
            opacity: canMoveDown ? 1 : 0.3,
          }}
        >
          <ChevronDown size={16} />
        </button>

        {/* 이름 수정 */}
        {editable && (
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <Pencil size={16} />
          </button>
        )}

        {/* 삭제 */}
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
