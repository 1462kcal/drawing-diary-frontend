import { Search } from "lucide-react";

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <header className="home-header">
      <div className="home-header-title">drawing diary.</div>

      <div className="home-header-actions">
        <div className="home-search">
          <Search size={13} aria-hidden="true" />

          <input type="text" placeholder="일기 검색" aria-label="일기 검색" />
        </div>
      </div>

      <div className="home-window-controls">
        <span className="window-minimize">-</span>
        <span className="window-maximize">□</span>

        <button
          type="button"
          className="window-close"
          aria-label="로그아웃"
          onClick={onLogout}
        >
          ×
        </button>
      </div>
    </header>
  );
}
