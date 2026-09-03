const mockRanking = [
  {
    rank: 1,
    nickname: "이케아연필도둑",
    title:
      "그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기",
  },
  {
    rank: 2,
    nickname: "밤티",
    title: "네",
  },
  {
    rank: 3,
    nickname: "우소다용",
    title: "거짓말이야",
  },
  {
    rank: 4,
    nickname: "ㅋ",
    title: "뭐쓰지",
  },
  {
    rank: 5,
    nickname: "그림그리고싶다",
    title: "시간이없슨",
  },
];

export default function RankingPreview() {
  return (
    <section className="ranking-section">
      <div className="ranking-window">
        <div className="ranking-window-header">
          <span>THIS WEEK</span>

          <span>TOP 05</span>
        </div>

        <div className="ranking-list">
          {mockRanking.map((item) => (
            <article
              key={item.rank}
              className={`ranking-item ${item.rank <= 3 ? "top-ranking" : ""}`}
            >
              <div className="ranking-number">
                {String(item.rank).padStart(2, "0")}
              </div>

              <div className="ranking-avatar">
                {item.rank === 1 ? "♕" : "♡"}
              </div>

              <div className="ranking-info">
                <h3>{item.title}</h3>

                <span>@{item.nickname}</span>
              </div>

              <div className="ranking-arrow">→</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
