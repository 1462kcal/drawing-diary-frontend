const mockPopularDiaries = [
  {
    id: 1,
    nickname: "이케아연필도둑",
    title:
      "오늘의 그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기",
    content: "친구와 함께 그림을 그렸다.",
  },
  {
    id: 2,
    nickname: "모노쿠마",
    title: "우뿌뿌뿌",
    content:
      "우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌",
  },
  {
    id: 3,
    nickname: "ㅇㅊ",
    title: "돈이없어",
    content: "집도없어",
  },
];

export default function PopularDiary() {
  return (
    <section>
      <h2>인기 그림일기</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {mockPopularDiaries.map((diary) => (
          <article
            key={diary.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
              background: "#fff",
            }}
          >
            <div
              style={{
                height: 180,
                background: "#f1f1f1",
                borderRadius: 6,
                marginBottom: 12,
              }}
            />

            <div
              style={{
                fontSize: 12,
                color: "#777",
                marginBottom: 6,
              }}
            >
              @{diary.nickname}
            </div>

            <h3
              style={{
                margin: "0 0 8px",
              }}
            >
              {diary.title}
            </h3>

            <p
              style={{
                margin: 0,
                color: "#666",
                fontSize: 14,
              }}
            >
              {diary.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
