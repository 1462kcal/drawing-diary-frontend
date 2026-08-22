export interface FeedItem {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  title: string;
  content: string;
  imageUrl: string | null;
}

interface FeedCardProps {
  item: FeedItem;
}

export default function FeedCard({ item }: FeedCardProps) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 20,
        background: "#fff",
      }}
    >
      {/* 작성자 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#eee",
            overflow: "hidden",
          }}
        >
          {item.profileImageUrl && (
            <img
              src={item.profileImageUrl}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        <strong>{item.nickname}</strong>
      </div>

      {/* 이미지 */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          background: "#f1f1f1",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>

      {/* 내용 */}
      <h3
        style={{
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#666",
        }}
      >
        {item.content}
      </p>
    </article>
  );
}
