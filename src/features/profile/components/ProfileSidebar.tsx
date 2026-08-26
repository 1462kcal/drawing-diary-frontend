import ActivityCalendar from "./ActivityCalendar";
import CategoryFilter from "./CategoryFilter";

import type { Activity, Category } from "../types/profile";

interface ProfileSidebarProps {
  activities: Activity[];
  categories: Category[];
  selectedCategory: number | null;
  onCategoryChange: (categoryId: number | null) => void;
}

export default function ProfileSidebar({
  activities,
  categories,
  selectedCategory,
  onCategoryChange,
}: ProfileSidebarProps) {
  return (
    <aside
      style={{
        width: 240,
        flexShrink: 0,
        borderLeft: "1px solid #222",
        minHeight: 700,
      }}
    >
      <ActivityCalendar activities={activities} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={onCategoryChange}
      />
    </aside>
  );
}
