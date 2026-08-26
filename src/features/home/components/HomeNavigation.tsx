import { BookHeart, Heart, House, Settings, Trophy } from "lucide-react";

import { NavLink } from "react-router-dom";

const mainNavItems = [
  {
    to: "/",
    label: "피드",
    icon: House,
    end: true,
  },
  {
    to: "/popular",
    label: "인기 일기",
    icon: Heart,
  },
  {
    to: "/ranking",
    label: "랭킹",
    icon: Trophy,
  },
];

const personalNavItems = [
  {
    to: "/profile",
    label: "내 일기장",
    icon: BookHeart,
  },
  {
    to: "/settings",
    label: "설정",
    icon: Settings,
  },
];

function NavigationItem({
  to,
  label,
  icon: Icon,
  end = false,
}: {
  to: string;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>;
  end?: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `home-nav-item${isActive ? " active" : ""}`}
    >
      <span className="home-nav-icon">
        <Icon size={17} strokeWidth={2} />
      </span>

      <span>{label}</span>
    </NavLink>
  );
}

export default function HomeNavigation() {
  return (
    <nav className="home-nav">
      <div className="home-nav-group">
        {mainNavItems.map((item) => (
          <NavigationItem key={item.to} {...item} />
        ))}
      </div>

      <div className="home-nav-divider" />

      <div className="home-nav-group">
        {personalNavItems.map((item) => (
          <NavigationItem key={item.to} {...item} />
        ))}
      </div>
    </nav>
  );
}
