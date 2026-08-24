import type { Profile } from "../types/profile";

interface ProfileHeaderProps {
  profile: Profile;
  followerCount: number;
  followingCount: number;
  onBack: () => void;
  onEdit: () => void;
}

export default function ProfileHeader({
  profile,
  followerCount,
  followingCount,
  onBack,
  onEdit,
}: ProfileHeaderProps) {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "20px 32px",
      }}
    >
      {/* 뒤로가기 */}
      <button
        type="button"
        onClick={onBack}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: 20,
        }}
      >
        ←
      </button>

      {/* 프로필 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <img
          src={profile.profileImageUrl ?? "/default-profile.png"}
          alt="프로필 이미지"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 24,
            }}
          >
            {profile.nickname}
          </h1>

          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 10,
            }}
          >
            <span>팔로워 {followerCount}</span>

            <span>팔로잉 {followingCount}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onEdit}
          style={{
            marginLeft: "auto",
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: 6,
            background: "#fff",
            cursor: "pointer",
          }}
        >
          프로필 수정
        </button>
      </div>
    </section>
  );
}
