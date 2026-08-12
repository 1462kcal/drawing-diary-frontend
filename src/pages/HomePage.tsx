import { useEffect, useState } from "react";

import Header from "../features/home/components/Header";
import Sidebar from "../features/home/components/Sidebar";
import Feed from "../features/home/components/Feed";

import { getMyProfile } from "../features/home/services/homeService";
import type { User } from "../features/home/types/user";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();
        setUser(data);
      } catch {
        // 비로그인 상태라면 user는 null 유지
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 32,
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
        }}
      >
        <Sidebar user={user} loading={loading} />

        <div
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Feed />
        </div>
      </main>
    </div>
  );
}
