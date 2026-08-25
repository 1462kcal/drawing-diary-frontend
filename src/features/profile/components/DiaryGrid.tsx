import DiaryCard from "./DiaryCard";
import type { Diary } from "../types/profile";

interface DiaryGridProps {
  diaries: Diary[];
}

export default function DiaryGrid({ diaries }: DiaryGridProps) {
  if (diaries.length === 0) {
    return (
      <div
        style={{
          padding: "80px 0",
          textAlign: "center",
          color: "#999",
        }}
      >
        작성한 그림일기가 없습니다.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "28px 24px",
      }}
    >
      {diaries.map((diary) => (
        <DiaryCard key={diary.id} diary={diary} />
      ))}
    </div>
  );
}
