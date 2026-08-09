import { Eye, Pencil, Trash2 } from "lucide-react";

interface LayerItemProps {
  name: string;
  selected?: boolean;
  editable?: boolean;

  onClick?: () => void;
  onDelete?: () => void;
}

export default function LayerItem({
  name,
  selected = false,
  editable = false,
  onClick,
  onDelete,
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
        <Eye size={16} />

        {/* 레이어 썸네일 */}
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
          gap: 6,
        }}
      >
        {editable && (
          <Pencil
            size={16}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        )}

        {onDelete && (
          <Trash2
            size={16}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          />
        )}
      </div>
    </div>
  );
}
