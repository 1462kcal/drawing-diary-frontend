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
    <section>
      <h2>그림일기 랭킹</h2>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          background: "#fff",
        }}
      >
        {mockRanking.map((item) => (
          <div
            key={item.rank}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "14px 18px",
              borderBottom: item.rank !== 5 ? "1px solid #eee" : "none",
            }}
          >
            <strong
              style={{
                width: 24,
              }}
            >
              {item.rank}
            </strong>

            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#eee",
              }}
            />

            <div>
              <strong>{item.title}</strong>

              <div
                style={{
                  fontSize: 12,
                  color: "#777",
                  marginTop: 4,
                }}
              >
                @{item.nickname}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
