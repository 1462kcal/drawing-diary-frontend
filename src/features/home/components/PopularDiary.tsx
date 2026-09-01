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
      "우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌",
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
    <section className="popular-section">
      <div className="popular-grid">
        {mockPopularDiaries.map((diary, index) => (
          <article key={diary.id} className="popular-card">
            <div className="popular-card-number">0{index + 1}</div>

            <div className="popular-card-image">
              <span>♡</span>
            </div>

            <div className="popular-card-author">@{diary.nickname}</div>

            <h3>{diary.title}</h3>

            <p>{diary.content}</p>

            <div className="popular-card-footer">
              <span>♡ 24</span>

              <span>read →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
