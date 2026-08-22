import { useNavigate } from "react-router-dom";
import type { User } from "../types/user";

interface ProfileSummaryProps {
  user: User | null;
  loading?: boolean;
}

export default function ProfileSummary({
  user,
  loading = false,
}: ProfileSummaryProps) {
  const navigate = useNavigate();

  // 로그인 여부 확인 중
  if (loading) {
    return (
      <div
        style={{
          padding: 16,
          border: "1px solid #ddd",
          borderRadius: 8,
          background: "#fff",
          textAlign: "center",
        }}
      >
        불러오는 중...
      </div>
    );
  }

  // 로그인하지 않은 경우
  if (!user) {
    return (
      <div
        style={{
          padding: 20,
          border: "1px solid #ddd",
          borderRadius: 8,
          background: "#fff",
          textAlign: "center",
        }}
      >
        {/* 프로필 아이콘 */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
            fontSize: 24,
          }}
        >
          👤
        </div>

        <strong
          style={{
            display: "block",
            marginBottom: 6,
          }}
        >
          로그인하세요
        </strong>

        <p
          style={{
            margin: "0 0 16px",
            fontSize: 13,
            color: "#777",
            lineHeight: 1.5,
          }}
        >
          로그인하고
          <br />
          그림일기를 시작해보세요!
        </p>

        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            padding: "9px 12px",
            border: "none",
            borderRadius: 6,
            background: "#222",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          로그인
        </button>
      </div>
    );
  }

  // 로그인한 경우
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        background: "#fff",
      }}
    >
      {/* 프로필 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            overflow: "hidden",
            background: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {user.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt="프로필"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            "👤"
          )}
        </div>

        <div>
          <strong>{user.nickname}</strong>

          <div
            style={{
              fontSize: 12,
              color: "#777",
              marginTop: 4,
            }}
          >
            @{user.id}
          </div>
        </div>
      </div>

      {/* 메뉴 */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 16,
        }}
      >
        <button>일기쓰기</button>
        <button>내 일기장</button>
        <button>관리</button>
      </div>
    </div>
  );
}
