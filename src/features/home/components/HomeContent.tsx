import type { User } from "../types/user";
import type { HomeTab } from "../types/home";

import Feed from "./Feed";
import PopularDiary from "./PopularDiary";
import RankingPreview from "./RankingPreview";
import LoginRequired from "./LoginRequired";

interface HomeContentProps {
  user: User | null;
  activeTab: HomeTab;
}

const tabInfo = {
  feed: {
    label: "COMMUNITY",
    title: "Feed",
    description: "오늘 내 친구들은...",
  },
  popular: {
    label: "POPULAR",
    title: "popular diaries",
    description: "이건 좋아요한 일기로 수정해라",
  },
  ranking: {
    label: "RANKING",
    title: "ranking",
    description: "이번 주 인기 그림일기",
  },
};

export default function HomeContent({ user, activeTab }: HomeContentProps) {
  const isLoggedIn = !!user;

  const info = tabInfo[activeTab];

  return (
    <section className="home-content">
      <header className="home-content-header">
        <div>
          <div className="home-section-label">{info.label}</div>

          <h1>{info.title}</h1>

          <p>{info.description}</p>
        </div>

        <div className="community-status">
          <span className="status-dot" />
          ONLINE
        </div>
      </header>

      <div className="home-tab-display"></div>

      <div className="home-content-scroll">
        {activeTab === "feed" && (
          <>{isLoggedIn ? <Feed /> : <LoginRequired />}</>
        )}

        {activeTab === "popular" && <PopularDiary />}

        {activeTab === "ranking" && <RankingPreview />}
      </div>
    </section>
  );
}
