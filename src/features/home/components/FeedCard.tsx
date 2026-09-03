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
  index?: number;
}

export default function FeedCard({ item, index = 0 }: FeedCardProps) {
  return (
    <article className={`feed-card feed-card-${index % 3}`}>
      <div className="feed-card-top">
        <div className="feed-author">
          <div className="feed-author-avatar">
            {item.profileImageUrl ? (
              <img src={item.profileImageUrl} alt="" />
            ) : (
              <span>♡</span>
            )}
          </div>

          <div>
            <strong>@{item.nickname}</strong>

            <span>just posted</span>
          </div>
        </div>

        <span className="feed-card-date">2026.08</span>
      </div>

      <div className="feed-card-paper">
        <div className="feed-card-category"># 그림일기</div>

        <h3>{item.title}</h3>

        <div className="feed-image">
          {item.imageUrl ? (
            <img src={item.imageUrl} alt={item.title} />
          ) : (
            <div className="empty-feed-image">
              <span>♡</span>
              <small>drawing diary</small>
            </div>
          )}
        </div>

        <p>{item.content}</p>
      </div>

      <div className="feed-card-bottom">
        <div className="feed-reactions">
          <button type="button" aria-label="좋아요">
            ♡
          </button>

          <button type="button" aria-label="댓글">
            ○
          </button>
        </div>

        <span>view diary →</span>
      </div>
    </article>
  );
}
