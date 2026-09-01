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
    icon: "▣",
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
      className={({ isActive }) =>
        `home-navigation-item ${isActive ? "active" : ""}`
      }
    >
      <span className="navigation-icon" aria-hidden="true">
        {icon}
      </span>

      <span>{label}</span>
    </NavLink>
  );
}

export default function HomeNavigation() {
  return (
    <nav className="home-navigation" aria-label="주요 메뉴">
      <div className="navigation-group">
        <div className="navigation-label">COMMUNITY</div>

        {mainNavItems.map((item) => (
          <NavigationItem key={item.to} {...item} />
        ))}
      </div>

      <div className="navigation-divider" />

      <div className="navigation-group">
        <div className="navigation-label">MY DIARY</div>

        {personalNavItems.map((item) => (
          <NavigationItem key={item.to} {...item} />
        ))}
      </div>
    </nav>
  );
}
