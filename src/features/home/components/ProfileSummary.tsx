import type { User } from "../types/user";

interface ProfileSummaryProps {
  user: User | null;
  loading?: boolean;
}

export default function ProfileSummary({
  user,
  loading = false,
}: ProfileSummaryProps) {
  if (loading) {
    return (
      <div className="home-profile">
        <div className="home-profile-image" />

        <div
          style={{
            width: 64,
            height: 14,
            borderRadius: 8,
            background: "#e8f5f8",
          }}
        />
      </div>
    );
  }

  return (
    <div className="home-profile">
      <div className="home-profile-image">
        {user?.profileImageUrl ? (
          <img src={user.profileImageUrl} alt={`${user.nickname} 프로필`} />
        ) : (
          <span style={{ fontSize: 25 }}>🌷</span>
        )}
      </div>

      <span className="home-profile-name">
        {user?.nickname ?? "로그인해주세요"}
      </span>
    </div>
  );
}
