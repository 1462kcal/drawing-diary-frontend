import type { Diary } from "../types/profile";

interface DiaryCardProps {
  diary: Diary;
}

export default function DiaryCard({ diary }: DiaryCardProps) {
  return (
    <article
      style={{
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          background: "#f1f1f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {diary.imageUrl ? (
          <img
            src={diary.imageUrl}
            alt={diary.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span
            style={{
              color: "#aaa",
              fontSize: 13,
            }}
          >
            이미지 없음
          </span>
        )}
      </div>

      <div
        style={{
          marginTop: 8,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          {diary.title}
        </h3>

        <p
          style={{
            margin: "4px 0 0",
            color: "#888",
            fontSize: 12,
          }}
        >
          {diary.createdAt}
        </p>
      </div>
    </article>
  );
}
