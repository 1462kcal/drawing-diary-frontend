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
    <article className="diary-card">
      {/* Author */}
      <div className="diary-card-header">
        <div className="diary-card-avatar">
          {item.profileImageUrl ? (
            <img src={item.profileImageUrl} alt="" />
          ) : (
            <span>🌷</span>
          )}
        </div>

        <div className="diary-card-author">
          <span className="diary-card-author-name">{item.nickname}</span>

          <span className="diary-card-date">오늘의 그림일기</span>
        </div>
      </div>

      {/* Image */}
      <div className="diary-card-image">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.title} />
        ) : (
          <div className="diary-card-placeholder">☁️</div>
        )}
      </div>

      {/* Content */}
      <div className="diary-card-body">
        <h3 className="diary-card-title">{item.title}</h3>

        <p className="diary-card-content">{item.content}</p>
      </div>
    </article>
  );
}
