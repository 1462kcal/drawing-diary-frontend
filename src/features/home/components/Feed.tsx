import FeedCard, { type FeedItem } from "./FeedCard";

const mockFeeds: FeedItem[] = [
  {
    id: 1,
    nickname: "이케아연필도둑",
    profileImageUrl: null,
    title:
      "그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기그림일기",
    content: "친구와 함께 그림을 그렸다.",
    imageUrl: null,
  },
  {
    id: 2,
    nickname: "모노쿠마",
    profileImageUrl: null,
    title: "우뿌뿌뿌",
    content:
      "우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌우뿌뿌뿌뿌",
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
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          피드
        </h2>

        <button>전체 보기</button>
      </div>

      {mockFeeds.map((feed) => (
        <FeedCard key={feed.id} item={feed} />
      ))}
    </section>
  );
}
