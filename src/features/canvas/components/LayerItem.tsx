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
      className={`layer-item ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {/* 왼쪽 */}
      <div className="layer-item-main">
        <button
          className="layer-icon-button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleVisibility?.();
          }}
          aria-label={visible ? "레이어 숨기기" : "레이어 보이기"}
        >
          {visible ? <Eye size={13} /> : <EyeOff size={13} />}
        </button>

        <div className="layer-thumbnail" />

        <span className="layer-name">{name}</span>
      </div>

      {/* 오른쪽 */}
      <div className="layer-item-actions">
        <button
          className="layer-icon-button"
          onClick={(e) => {
            e.stopPropagation();
            onMoveUp?.();
          }}
          disabled={!canMoveUp}
          aria-label="레이어 위로 이동"
        >
          <ChevronUp size={12} />
        </button>

        <button
          className="layer-icon-button"
          onClick={(e) => {
            e.stopPropagation();
            onMoveDown?.();
          }}
          disabled={!canMoveDown}
          aria-label="레이어 아래로 이동"
        >
          <ChevronDown size={12} />
        </button>

        {editable && (
          <button
            className="layer-icon-button"
            onClick={(e) => {
              e.stopPropagation();
            }}
            aria-label="레이어 이름 수정"
          >
            <Pencil size={12} />
          </button>
        )}

        {onDelete && (
          <button
            className="layer-icon-button layer-delete-button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            aria-label="레이어 삭제"
          >
            <Trash2 size={12} />
          </button>
        )}
      </div>
    </div>
  );
}
