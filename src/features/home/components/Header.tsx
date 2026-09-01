import { Bell, Search, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="home-header">
      <div className="home-window-controls">
        <span />
        <span />
        <span />
      </div>

      <div className="home-header-title">drawing diary.</div>

      <div className="home-header-actions">
        <div className="home-search">
          <Search size={13} aria-hidden="true" />

          <input type="text" placeholder="일기 검색" aria-label="일기 검색" />
        </div>

        <button type="button" className="header-icon-button" aria-label="알림">
          <Bell size={15} />
        </button>

        <button
          type="button"
          className="header-profile-button"
          aria-label="프로필"
        >
          <UserRound size={15} />
        </button>
      </div>
    </header>
  );
}
