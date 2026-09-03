import ProfileSummary from "./ProfileSummary";
import HomeNavigation from "./HomeNavigation";
import { Link } from "react-router-dom";

import type { User } from "../types/user";

import LogoutButton from "../../../components/common/LogoutButton";

interface SidebarProps {
  user: User | null;
  loading?: boolean;
}

export default function Sidebar({ user, loading = false }: SidebarProps) {
  return (
    <aside className="home-sidebar">
      <ProfileSummary user={user} loading={loading} />

      <div className="sidebar-navigation">
        <HomeNavigation />
      </div>

      <Link to="/canvas" className="create-diary-button">
        <span>✦</span>
        그림일기 쓰기
      </Link>

      {!loading && user && (
        <div className="sidebar-logout">
          <LogoutButton />
        </div>
      )}
    </aside>
  );
}
