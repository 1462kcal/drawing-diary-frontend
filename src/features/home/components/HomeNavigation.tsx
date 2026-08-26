import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "피드", icon: "✎", end: true },
  { to: "/popular", label: "인기 일기", icon: "♡" },
  { to: "/ranking", label: "랭킹", icon: "♕" },
];

export default function HomeNavigation() {
  return (
    <nav aria-label="홈 메뉴" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "11px 14px",
            borderRadius: 12,
            textDecoration: "none",
            color: isActive ? "#34312D" : "#77716A",
            background: isActive ? "#EEE9E1" : "transparent",
            fontWeight: isActive ? 700 : 500,
            transition: "background 0.15s ease, color 0.15s ease",
          })}
        >
          <span aria-hidden="true" style={{ width: 20, textAlign: "center" }}>
            {item.icon}
          </span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
