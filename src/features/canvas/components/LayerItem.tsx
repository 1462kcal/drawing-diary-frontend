import { Eye, Pencil } from "lucide-react";

interface LayerItemProps {
  name: string;
  editable?: boolean;
}

export default function LayerItem({ name, editable = false }: LayerItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ccc",
        padding: "8px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Eye size={18} />
        <span>{name}</span>
      </div>

      {editable && <Pencil size={16} />}
    </div>
  );
}
