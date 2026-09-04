import { Bell } from "lucide-react";

import type { User } from "../types/user";

interface ProfileSummaryProps {
  user: User | null;
  loading?: boolean;
  onNotificationClick?: () => void;
}

export default function ProfileSummary({
  user,
  loading = false,
  onNotificationClick,
}: ProfileSummaryProps) {
  if (loading) {
    return (
      <section className="sidebar-profile">
        <div className="retro-titlebar">
          <span>MY SPACE</span>

          <div className="retro-window-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="sidebar-profile-body">
          <div className="profile-avatar skeleton" />

          <div className="profile-name-skeleton" />
        </div>
      </section>
    );
  }

  return (
    <section className="sidebar-profile">
      <div className="retro-titlebar">
        <span>MY SPACE</span>

        <div className="retro-window-buttons">
          <button
            type="button"
            className="my-space-notification"
            aria-label="알림"
            onClick={onNotificationClick}
          >
            <Bell size={13} />
          </button>
        </div>
      </div>

      <div className="sidebar-profile-body">
        <div className="profile-avatar">
          {user?.profileImageUrl ? (
            <img src={user.profileImageUrl} alt={`${user.nickname} 프로필`} />
          ) : (
            <span>♡</span>
          )}
        </div>

        <div className="profile-user-name">{user?.nickname ?? "guest"}</div>

        {!user && <div className="profile-login-message">로그인해주세요</div>}
      </div>
    </section>
  );
}
