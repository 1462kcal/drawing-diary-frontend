import ProfileSummary from "./ProfileSummary";
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
        width: 220,
        flexShrink: 0,
      }}
    >
      <ProfileSummary user={user} loading={loading} />

      {/* 로그인 상태에서만 로그아웃 버튼 표시 */}
      {!loading && user && (
        <div
          style={{
            marginTop: 12,
          }}
        >
          <LogoutButton />
        </div>
      )}
    </aside>
  );
}
