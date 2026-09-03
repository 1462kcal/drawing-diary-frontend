import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileMini from "../features/profile/components/ProfileMini";
import DiaryPage from "../features/profile/components/DiaryPage";
import DiaryNavigator from "../features/profile/components/DiaryNavigator";
import DiaryCalendar from "../features/profile/components/DiaryCalendar";
import CategoryPanel from "../features/profile/components/CategoryPanel";

import {
  getMyProfile,
  getMyDiaries,
} from "../features/profile/services/profileService";

import {
  MOCK_USER,
  MOCK_DIARIES,
  MOCK_CATEGORIES,
} from "../features/profile/mocks/diaryMock";

import type {
  ProfileUser,
  Diary,
  Category,
} from "../features/profile/types/profile";

import "../features/profile/styles/profile.css";

/**
 * 개발 중에는 Mock 데이터 사용
 *
 * API 연동 확인할 때 false로 변경
 */
const USE_MOCK_DATA = false;

export default function ProfilePage() {
  const navigate = useNavigate();

  const [user, setUser] = useState<ProfileUser | null>(null);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);

  /**
   * 현재 보고 있는 일기의 index
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * 선택된 카테고리
   *
   * null = 전체
   */
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  /**
   * 현재 선택된 날짜
   *
   * Calendar에서 사용
   */
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  /**
   * 프로필 / 일기 데이터 조회
   */
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      if (USE_MOCK_DATA) {
        setUser(MOCK_USER);
        setDiaries(MOCK_DIARIES);
        setCategories(MOCK_CATEGORIES);

        setLoading(false);
        return;
      }

      try {
        const [profileData, diaryData] = await Promise.all([
          getMyProfile(),
          getMyDiaries(),
        ]);

        setUser(profileData);
        setDiaries(diaryData);

        /*
         * 현재 카테고리 API가 별도로 없기 때문에
         * 임시로 Mock 카테고리를 사용
         */
        setCategories(MOCK_CATEGORIES);
      } catch (error) {
        console.error("프로필 조회 실패:", error);

        setUser(null);
        setDiaries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  /**
   * 카테고리 적용된 일기
   */
  const filteredDiaries = useMemo(() => {
    if (selectedCategory === null) {
      return diaries;
    }

    return diaries.filter((diary) => diary.categoryId === selectedCategory);
  }, [diaries, selectedCategory]);

  /**
   * 현재 일기
   */
  const currentDiary = filteredDiaries[currentIndex] ?? null;

  /**
   * 이전 일기
   */
  const handlePrevious = () => {
    if (filteredDiaries.length === 0) {
      return;
    }

    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return filteredDiaries.length - 1;
      }

      return prev - 1;
    });
  };

  /**
   * 다음 일기
   */
  const handleNext = () => {
    if (filteredDiaries.length === 0) {
      return;
    }

    setCurrentIndex((prev) => {
      if (prev >= filteredDiaries.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  /**
   * 카테고리 변경
   */
  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategory(categoryId);

    /**
     * 카테고리를 바꾸면 첫 번째 일기부터
     */
    setCurrentIndex(0);

    setSelectedDate(null);
  };

  /**
   * 날짜 선택
   */
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);

    const index = filteredDiaries.findIndex(
      (diary) => diary.createdAt.slice(0, 10) === date,
    );

    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  /**
   * 로딩
   */
  if (loading) {
    return (
      <main className="profile-page">
        <div className="profile-window">
          <div className="profile-state">
            <span>loading...</span>
          </div>
        </div>
      </main>
    );
  }

  /**
   * 프로필 없음
   */
  if (!user) {
    return (
      <main className="profile-page">
        <div className="profile-window">
          <div className="profile-state">
            <span>프로필을 불러올 수 없습니다.</span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="profile-page">
      <div className="profile-window">
        {/* ========================================
            Window Header
        ======================================== */}

        <header className="profile-window-header">
          <div className="window-controls">
            <span />
            <span />
            <span
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
              title="닫기"
            />
          </div>

          <span className="window-title">{user.nickname}'s diary</span>
        </header>

        {/* ========================================
            Main Layout
        ======================================== */}

        <div className="profile-layout">
          {/* ======================================
              LEFT
          ====================================== */}

          <aside className="profile-left">
            <ProfileMini user={user} />
          </aside>

          {/* ======================================
              CENTER
          ====================================== */}

          <section className="profile-center">
            <div className="diary-book">
              <DiaryPage diary={currentDiary} />

              <DiaryNavigator
                currentIndex={currentIndex}
                totalCount={filteredDiaries.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>
          </section>

          {/* ======================================
              RIGHT
          ====================================== */}

          <aside className="profile-right">
            <DiaryCalendar
              diaries={filteredDiaries}
              selectedDate={selectedDate}
              onSelectDate={handleDateSelect}
            />

            <CategoryPanel
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
            />
          </aside>
        </div>

        {/* ========================================
            Bottom Status Bar
        ======================================== */}

        <footer className="profile-window-footer">
          <span>♡ personal diary archive</span>

          <span>{filteredDiaries.length} entries</span>
        </footer>
      </div>
    </main>
  );
}
