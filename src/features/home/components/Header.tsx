import { Link, useLocation } from "react-router-dom";
import { Bell, Search, UserRound } from "lucide-react";

export default function Header() {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <header
      style={{
        height: 60,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #ddd",
        background: "#fff",
      }}
    >
      <div style={{ marginRight: 40 }}>로고</div>

      <nav
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: currentPath === "/" ? "#222" : "#888",
            fontWeight: currentPath === "/" ? 700 : 400,
          }}
        >
          피드
        </Link>

        <Link
          to="/popular"
          style={{
            textDecoration: "none",
            color: currentPath === "/popular" ? "#222" : "#888",
            fontWeight: currentPath === "/popular" ? 700 : 400,
          }}
        >
          인기
        </Link>

        <Link
          to="/ranking"
          style={{
            textDecoration: "none",
            color: currentPath === "/ranking" ? "#222" : "#888",
            fontWeight: currentPath === "/ranking" ? 700 : 400,
          }}
        >
          랭킹
        </Link>
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
