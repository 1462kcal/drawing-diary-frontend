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
    <aside
      style={{
        width: 230,
        flexShrink: 0,

        minHeight: "calc(100vh - 64px)",

        padding: "28px 18px",

        boxSizing: "border-box",

        borderRight: "1px solid #E8E3DB",

        backgroundColor: "#F8F5F0",

        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Profile */}
      <ProfileSummary user={user} loading={loading} />

      {/* Navigation */}
      <div
        style={{
          marginTop: 30,
        }}
      >
        <HomeNavigation />
      </div>

      {/* Create Diary */}
      <div
        style={{
          marginTop: 28,
        }}
      >
        <button
          type="button"
          style={{
            width: "100%",

            padding: "12px 14px",

            border: "none",
            borderRadius: 12,

            backgroundColor: "#34312D",
            color: "#FFFFFF",

            fontSize: 14,
            fontWeight: 700,

            cursor: "pointer",
          }}
        >
          ✦ 그림일기 쓰기
        </button>
      </div>

      {/* Logout */}
      {!loading && user && (
        <div
          style={{
            marginTop: "auto",
            paddingTop: 24,
          }}
        >
          <LogoutButton />
        </div>
      )}
    </aside>
  );
}
