import { Bell, Search, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        borderBottom: "1px solid #E8E3DB",
        background: "#FFFEFB",
        boxSizing: "border-box",
      }}
    >
      <strong
        style={{
          fontSize: 18,
          letterSpacing: "-0.02em",
          color: "#34312D",
        }}
      >
        drawing diary
      </strong>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ position: "relative", width: 220 }}>
          <Search
            size={16}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9A938A",
            }}
          />
          <input
            type="text"
            placeholder="일기 검색"
            aria-label="일기 검색"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "9px 12px 9px 34px",
              border: "1px solid #E3DED6",
              borderRadius: 12,
              outline: "none",
              background: "#F7F4EF",
              color: "#34312D",
            }}
          />
        </div>

        <button
          aria-label="알림"
          style={{
            width: 40,
            height: 40,
            border: 0,
            borderRadius: 12,
            background: "transparent",
            color: "#5F5A54",
            cursor: "pointer",
          }}
        >
          <Bell size={19} />
        </button>

        <button
          aria-label="프로필"
          style={{
            width: 40,
            height: 40,
            border: 0,
            borderRadius: 12,
            background: "#F0ECE5",
            color: "#5F5A54",
            cursor: "pointer",
          }}
        >
          <UserRound size={19} />
        </button>
      </div>
    </header>
  );
}
