import FeedCard, { type FeedItem } from "./FeedCard";

const mockFeeds: FeedItem[] = [
  {
    id: 1,
    nickname: "이케아연필도둑",
    profileImageUrl: null,
    title: "오늘의 그림일기",
    content: "친구와 함께 그림을 그렸다.",
    imageUrl: null,
  },
  {
    id: 2,
    nickname: "모노쿠마",
    profileImageUrl: null,
    title: "우뿌뿌뿌",
    content: "우뿌뿌ㅋㅋㅋㅋㅋㅋㅋ",
    imageUrl: null,
  },
  {
    id: 3,
    nickname: "ㅇㅊ",
    profileImageUrl: null,
    title: "돈이없어",
    content: "가챠망햇어",
    imageUrl: null,
  },
];

export default function Feed() {
  return (
    <section>
      <div className="home-section-header">
        <div>
          <h2 className="home-section-title">오늘의 그림일기 ☁️</h2>

          <p className="home-section-description">
            다른 사람들의 하루를 살펴보세요.
          </p>
        </div>
      </div>

      <div className="home-feed">
        {mockFeeds.map((feed) => (
          <FeedCard key={feed.id} item={feed} />
        ))}
      </div>
    </section>
  );
}
