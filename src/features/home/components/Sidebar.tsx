import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";

import ProfileSummary from "./ProfileSummary";
import HomeNavigation from "./HomeNavigation";

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

      <HomeNavigation />

      <Link to="/canvas" className="home-create-button">
        <PenLine size={16} />
        <span>그림일기 쓰기</span>
      </Link>

      {!loading && user && (
        <div
          style={{
            marginTop: "auto",
            paddingTop: 20,
          }}
        >
          <LogoutButton />
        </div>
      )}
    </aside>
  );
}
