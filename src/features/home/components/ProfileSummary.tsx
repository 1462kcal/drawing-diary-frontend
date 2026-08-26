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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "#E8E3DB",
          }}
        />

        <div
          style={{
            width: 70,
            height: 16,
            borderRadius: 6,
            backgroundColor: "#E8E3DB",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Profile Image */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          overflow: "hidden",
          backgroundColor: "#E8E3DB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt={`${user.nickname} 프로필`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span
            style={{
              fontSize: 24,
              color: "#8A847C",
            }}
          >
            ☺
          </span>
        )}
      </div>

      {/* Nickname */}
      <span
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: "#34312D",
        }}
      >
        {user?.nickname ?? "로그인해주세요"}
      </span>
    </div>
  );
}
