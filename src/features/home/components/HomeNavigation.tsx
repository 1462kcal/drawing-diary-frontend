import { NavLink } from "react-router-dom";

const mainNavItems = [
  {
    to: "/",
    label: "피드",
    icon: "✎",
    end: true,
  },
  {
    to: "/popular",
    label: "인기 일기",
    icon: "♡",
  },
  {
    to: "/ranking",
    label: "랭킹",
    icon: "♕",
  },
];

const personalNavItems = [
  {
    to: "/profile",
    label: "내 일기장",
    icon: "📖",
  },
  {
    to: "/settings",
    label: "설정",
    icon: "⚙",
  },
];

function NavigationItem({
  to,
  label,
  icon,
  end = false,
}: {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      style={({ isActive }) => ({
        display: "flex",
        alignItems: "center",
        gap: 12,

        padding: "11px 14px",

        borderRadius: 12,

        textDecoration: "none",

        color: isActive ? "#34312D" : "#77716A",

        backgroundColor: isActive ? "#EEE9E1" : "transparent",

        fontWeight: isActive ? 700 : 500,

        transition: "background-color 0.15s ease, color 0.15s ease",
      })}
    >
      <span
        aria-hidden="true"
        style={{
          width: 20,
          textAlign: "center",
          fontSize: 17,
        }}
      >
        {icon}
      </span>

      <span>{label}</span>
    </NavLink>
  );
}

export default function HomeNavigation() {
  return (
    <nav aria-label="주요 메뉴">
      {/* Main */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {mainNavItems.map((item) => (
          <NavigationItem key={item.to} {...item} />
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          margin: "18px 8px",
          backgroundColor: "#E8E3DB",
        }}
      />

      {/* Personal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {personalNavItems.map((item) => (
          <NavigationItem key={item.to} {...item} />
        ))}
      </div>
    </nav>
  );
}
