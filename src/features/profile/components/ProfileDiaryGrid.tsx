import type { Diary } from "../types/profile";

interface ProfileDiaryGridProps {
  diaries: Diary[];
}

export default function ProfileDiaryGrid({ diaries }: ProfileDiaryGridProps) {
  if (diaries.length === 0) {
    return (
      <div
        style={{
          padding: 80,
          textAlign: "center",
          color: "#888",
        }}
      >
        작성한 일기가 없습니다.
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
        <article
          key={diary.id}
          style={{
            cursor: "pointer",
          }}
        >
          <div
            style={{
              aspectRatio: "1 / 0.82",
              background: "#f1f1f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {diary.thumbnailUrl ? (
              <img
                src={diary.thumbnailUrl}
                alt={diary.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <span>🖼</span>
            )}
          </div>

          <p
            style={{
              margin: "10px 0 0",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            {diary.title}
          </p>
        </article>
      ))}
    </div>
  );
}
