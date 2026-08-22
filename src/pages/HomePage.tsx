import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../features/home/components/Header";
import Sidebar from "../features/home/components/Sidebar";
import HomeContent from "../features/home/components/HomeContent";

import { getMyProfile } from "../features/home/services/homeService";
import type { User } from "../features/home/types/user";
import type { HomeTab } from "../features/home/types/home";

export default function HomePage() {
  const location = useLocation();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // URL에 따라 현재 홈 탭 결정
  const getActiveTab = (): HomeTab => {
    switch (location.pathname) {
      case "/popular":
        return "popular";

      case "/ranking":
        return "ranking";

      case "/":
      default:
        return "feed";
    }
  };

  const activeTab = getActiveTab();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();

        setUser(data);
      } catch {
        // 비로그인 상태
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
          {!loading && <HomeContent user={user} activeTab={activeTab} />}
        </div>
      </main>
    </div>
  );
}
