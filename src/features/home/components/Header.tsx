import { Bell, Search, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header
      style={{
        height: 64,

        display: "flex",
        alignItems: "center",

        padding: "0 32px",

        boxSizing: "border-box",

        borderBottom: "1px solid #E8E3DB",

        backgroundColor: "#FFFEFB",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#34312D",
        }}
      >
        drawing diary
      </div>

      {/* Right */}
      <div
        style={{
          marginLeft: "auto",

          display: "flex",
          alignItems: "center",

          gap: 8,
        }}
      >
        {/* Search */}
        <div
          style={{
            position: "relative",
            width: 220,
          }}
        >
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

              backgroundColor: "#F7F4EF",

              color: "#34312D",
            }}
          />
        </div>

        {/* Notification */}
        <button
          type="button"
          aria-label="알림"
          style={{
            width: 40,
            height: 40,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            border: "none",
            borderRadius: 12,

            backgroundColor: "transparent",

            color: "#5F5A54",

            cursor: "pointer",
          }}
        >
          <Bell size={19} />
        </button>

        {/* Profile */}
        <button
          type="button"
          aria-label="프로필"
          style={{
            width: 40,
            height: 40,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            border: "none",
            borderRadius: 12,

            backgroundColor: "#F0ECE5",

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
