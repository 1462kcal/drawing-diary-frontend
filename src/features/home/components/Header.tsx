import { Bell, Search, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header
      style={{
        height: 64,
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        gap: 32,
        background: "#fff",
      }}
    >
      {/* 로고 */}
      <div
        style={{
          fontWeight: 700,
          fontSize: 20,
          marginRight: 20,
        }}
      >
        그림일기
      </div>

      {/* 메뉴 */}
      <nav
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <button>피드</button>
        <button>랭킹</button>
        <button>탐색</button>
      </nav>

      {/* 검색 */}
      <div
        style={{
          marginLeft: "auto",
          position: "relative",
          width: 240,
        }}
      >
        <Search
          size={16}
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
          }}
        />

        <input
          type="text"
          placeholder="Search"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "8px 10px 8px 32px",
            border: "1px solid #ccc",
            borderRadius: 6,
          }}
        />
      </div>

      {/* 우측 아이콘 */}
      <button>
        <Bell size={18} />
      </button>

      <button>
        <UserRound size={18} />
      </button>
    </header>
  );
}
