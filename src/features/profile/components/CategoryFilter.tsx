import type { Category } from "../types/profile";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onChange: (categoryId: number | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <section
      style={{
        padding: "0 16px 20px",
      }}
    >
      <h3
        style={{
          margin: "10px 0",
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        카테고리
      </h3>

      {/* 전체 보기 */}
      <button
        type="button"
        onClick={() => onChange(null)}
        style={{
          display: "block",
          width: "100%",
          padding: "12px 4px",
          textAlign: "left",
          border: "none",
          borderTop: "1px solid #222",
          background: "transparent",
          cursor: "pointer",
          fontWeight: selectedCategory === null ? 700 : 400,
        }}
      >
        전체 보기
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          style={{
            display: "block",
            width: "100%",
            padding: "12px 4px",
            textAlign: "left",
            border: "none",
            borderTop: "1px solid #222",
            background: "transparent",
            cursor: "pointer",
            fontWeight: selectedCategory === category.id ? 700 : 400,
            color: selectedCategory === category.id ? "#222" : "#999",
          }}
        >
          {category.name}
        </button>
      ))}
    </section>
  );
}
