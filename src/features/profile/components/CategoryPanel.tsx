import type { Category } from "../types/profile";

interface CategoryPanelProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (categoryId: number | null) => void;
}

export default function CategoryPanel({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryPanelProps) {
  return (
    <section className="retro-panel category-panel">
      <div className="retro-titlebar">
        <span>CATEGORY</span>

        <div className="retro-buttons">
          <span />
          <span />
        </div>
      </div>

      <div className="category-content">
        <button
          type="button"
          className={[
            "category-item",
            selectedCategory === null ? "category-item-selected" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => onSelectCategory(null)}
        >
          <span className="category-arrow">
            {selectedCategory === null ? "▶" : "▷"}
          </span>

          <span>ALL</span>
        </button>

        {categories.map((category) => {
          const selected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              className={[
                "category-item",
                selected ? "category-item-selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelectCategory(category.id)}
            >
              <span className="category-arrow">{selected ? "▶" : "▷"}</span>

              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
