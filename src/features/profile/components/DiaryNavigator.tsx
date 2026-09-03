interface DiaryNavigatorProps {
  currentIndex: number;
  totalCount: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function DiaryNavigator({
  currentIndex,
  totalCount,
  onPrevious,
  onNext,
}: DiaryNavigatorProps) {
  if (totalCount === 0) {
    return null;
  }

  return (
    <nav className="diary-navigator">
      <button
        type="button"
        className="diary-nav-button"
        onClick={onPrevious}
        aria-label="이전 일기"
      >
        &lt;
      </button>

      <span className="diary-page-number">
        {currentIndex + 1}
        {" / "}
        {totalCount}
      </span>

      <button
        type="button"
        className="diary-nav-button"
        onClick={onNext}
        aria-label="다음 일기"
      >
        &gt;
      </button>
    </nav>
  );
}
