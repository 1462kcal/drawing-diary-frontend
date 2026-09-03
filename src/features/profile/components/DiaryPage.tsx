import type { Diary } from "../types/profile";

interface DiaryPageProps {
  diary: Diary | null;
}

export default function DiaryPage({ diary }: DiaryPageProps) {
  if (!diary) {
    return (
      <article className="diary-page diary-page-empty">
        <div className="diary-empty-content">
          <span className="diary-empty-icon">♡</span>

          <p>아직 작성된 일기가 없습니다.</p>
        </div>
      </article>
    );
  }

  const formattedDate = new Date(diary.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="diary-page">
      {/* 날짜 */}
      <div className="diary-date">{formattedDate}</div>

      {/* 제목 */}
      <h1 className="diary-title">{diary.title}</h1>

      {/* 카테고리 */}
      {diary.categoryName && (
        <div className="diary-category">#{diary.categoryName}</div>
      )}

      {/* 그림 */}
      {diary.imageUrl && (
        <div className="diary-image-wrapper">
          <img src={diary.imageUrl} alt={diary.title} className="diary-image" />
        </div>
      )}

      {/* 그림이 없을 때 */}
      {!diary.imageUrl && (
        <div className="diary-image-placeholder">
          <span>♡</span>
          <small>today's drawing</small>
        </div>
      )}

      {/* 본문 */}
      <div className="diary-content">
        {diary.content ? (
          <p>{diary.content}</p>
        ) : (
          <p className="diary-content-empty">아직 작성된 내용이 없습니다.</p>
        )}
      </div>

      {/* 공개 상태 */}
      {diary.visibility && (
        <div className="diary-visibility">
          {diary.visibility === "PUBLIC"
            ? "PUBLIC"
            : diary.visibility === "PRIVATE"
              ? "PRIVATE"
              : "FOLLOWERS ONLY"}
        </div>
      )}
    </article>
  );
}
