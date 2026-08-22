import ProfileSummary from "./ProfileSummary";
import type { User } from "../types/user";

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
    </aside>
  );
}
