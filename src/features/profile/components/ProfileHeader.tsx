import { useNavigate } from "react-router-dom";

import type { ProfileUser } from "../types/profile";

interface ProfileHeaderProps {
  user: ProfileUser;
  isFollowing: boolean;
  onToggleFollow: () => void;
}

export default function ProfileHeader({
  user,
  isFollowing,
  onToggleFollow,
}: ProfileHeaderProps) {
  const navigate = useNavigate();

  return (
    <header
      style={{
        height: 56,
        borderBottom: "1px solid #222",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        position: "relative",
      }}
    >
      <button
        type="button"
        onClick={() => navigate(-1)}
        style={{
          border: "none",
          background: "transparent",
          fontSize: 28,
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      <h1
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          margin: 0,
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        {user.nickname}의 일기장
      </h1>

      <button
        type="button"
        onClick={onToggleFollow}
        style={{
          marginLeft: "auto",
          padding: "9px 18px",
          border: "none",
          borderRadius: 6,
          background: isFollowing ? "#eee" : "#222",
          color: isFollowing ? "#222" : "#fff",
          cursor: "pointer",
        }}
      >
        {isFollowing ? "팔로잉" : "팔로우"}
      </button>
    </header>
  );
}
