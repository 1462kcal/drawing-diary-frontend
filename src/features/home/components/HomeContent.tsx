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

export default function HomeContent({ user, activeTab }: HomeContentProps) {
  const isLoggedIn = !!user;

  return (
    <section>
      {/* 피드 */}
      {activeTab === "feed" && <>{isLoggedIn ? <Feed /> : <LoginRequired />}</>}

      {/* 인기 일기 */}
      {activeTab === "popular" && <PopularDiary />}

      {/* 랭킹 */}
      {activeTab === "ranking" && <RankingPreview />}
    </section>
  );
}
