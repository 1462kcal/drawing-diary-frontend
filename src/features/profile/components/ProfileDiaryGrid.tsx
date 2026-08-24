import type { ProfileDiary } from "../types/profile";

interface ProfileDiaryGridProps {
  diaries: ProfileDiary[];
}

export default function ProfileDiaryGrid({ diaries }: ProfileDiaryGridProps) {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "20px 32px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {diaries.map((diary) => (
          <article key={diary.id}>
            <img
              src={diary.thumbnailUrl ?? "/default-diary.png"}
              alt={diary.title}
              style={{
                width: "100%",
                aspectRatio: "1",
                objectFit: "cover",
                background: "#eee",
              }}
            />

            <p
              style={{
                marginTop: 8,
              }}
            >
              {diary.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
