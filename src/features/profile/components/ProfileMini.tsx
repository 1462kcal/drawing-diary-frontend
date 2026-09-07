import type { ProfileUser } from "../types/profile";

interface ProfileMiniProps {
  user: ProfileUser;
}

export default function ProfileMini({ user }: ProfileMiniProps) {
  return (
    <section className="profile-mini">
      <div className="retro-titlebar">
        <span>PROFILE</span>

        <div className="retro-buttons">
          {/* <span />
          <span />
          <span /> */}
        </div>
      </div>

      <div className="profile-mini-content">
        <div className="profile-mini-avatar">
          {user.profileImageUrl ? (
            <img src={user.profileImageUrl} alt={user.nickname} />
          ) : (
            <span className="profile-avatar-placeholder">♡</span>
          )}
        </div>

        <h2 className="profile-mini-name">{user.nickname}</h2>

        {user.bio && <p className="profile-mini-bio">{user.bio}</p>}

        <div className="profile-mini-divider" />

        <div className="profile-mini-meta">
          <div>
            <span>following</span>
            <strong>0</strong>
          </div>

          <div>
            <span>followers</span>
            <strong>0</strong>
          </div>
          <div>팔로우/언팔로우 버튼 혹은 일기쓰기 버튼 넣을 것</div>
        </div>
      </div>
    </section>
  );
}
