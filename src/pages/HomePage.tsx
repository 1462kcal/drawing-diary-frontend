import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../features/home/components/Header";
import Sidebar from "../features/home/components/Sidebar";
import HomeContent from "../features/home/components/HomeContent";

import { getMyProfile } from "../features/home/services/homeService";

import type { User } from "../features/home/types/user";
import type { HomeTab } from "../features/home/types/home";

import { useAuthStore } from "../features/auth/store/authStore";

import "../features/home/styles/home.css";

export default function HomePage() {
  const location = useLocation();

  const accessToken = useAuthStore((state) => state.accessToken);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
      if (!accessToken) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const data = await getMyProfile();

        setUser(data);
      } catch (error) {
        console.error("프로필 조회 실패:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [accessToken]);

  return (
    <div className="home-page">
      <div className="home-shell">
        <Header />

        <div className="home-body">
          <Sidebar user={user} loading={loading} />

          <main className="home-content">
            <div className="home-content-scroll">
              <div className="home-content-inner">
                {!loading && <HomeContent user={user} activeTab={activeTab} />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
