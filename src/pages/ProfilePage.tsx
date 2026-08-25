import { useEffect, useMemo, useState } from "react";

import ProfileHeader from "../features/profile/components/ProfileHeader";
import DiaryGrid from "../features/profile/components/DiaryGrid";
import ProfileSidebar from "../features/profile/components/ProfileSidebar";
import Pagination from "../features/profile/components/Pagination";

import {
  getMyProfile,
  getMyDiaries,
  followUser,
  unfollowUser,
} from "../features/profile/services/profileService";

import {
  MOCK_USER,
  MOCK_CATEGORIES,
  MOCK_DIARIES,
  MOCK_ACTIVITIES,
} from "../features/profile/mocks/diaryMock";

import type {
  ProfileUser,
  Diary,
  Category,
  Activity,
} from "../features/profile/types/profile";

// 개발 중에는 true
// 실제 API 확인할 때 false
const USE_MOCK_DATA = true;

const PAGE_SIZE = 6;

export default function ProfilePage() {
  const [user, setUser] = useState<ProfileUser | null>(null);

  const [diaries, setDiaries] = useState<Diary[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);

  const [activities, setActivities] = useState<Activity[]>([]);

  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [isFollowing, setIsFollowing] = useState(false);

  /**
   * 프로필 데이터 조회
   */
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      if (USE_MOCK_DATA) {
        setUser(MOCK_USER);
        setDiaries(MOCK_DIARIES);
        setCategories(MOCK_CATEGORIES);
        setActivities(MOCK_ACTIVITIES);

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
         * 현재 API 명세에는
         * 카테고리 / 활동량 API가 없기 때문에
         * 해당 부분은 일단 Mock 사용
         */
        setCategories(MOCK_CATEGORIES);
        setActivities(MOCK_ACTIVITIES);
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
   * 카테고리 필터링
   */
  const filteredDiaries = useMemo(() => {
    if (selectedCategory === null) {
      return diaries;
    }

    return diaries.filter((diary) => diary.categoryId === selectedCategory);
  }, [diaries, selectedCategory]);

  /**
   * 페이지네이션
   */
  const totalPages = Math.max(1, Math.ceil(filteredDiaries.length / PAGE_SIZE));

  const paginatedDiaries = filteredDiaries.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  /**
   * 카테고리 변경
   */
  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  /**
   * 팔로우 / 언팔로우
   */
  const handleFollow = async () => {
    if (!user) {
      return;
    }

    // Mock 상태
    if (USE_MOCK_DATA) {
      setIsFollowing((prev) => !prev);
      return;
    }

    try {
      if (isFollowing) {
        await unfollowUser(user.id);
      } else {
        await followUser(user.id);
      }

      setIsFollowing((prev) => !prev);
    } catch (error) {
      console.error("팔로우 처리 실패:", error);
    }
  };

  /**
   * 로딩
   */
  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        프로필을 불러오는 중...
      </main>
    );
  }

  /**
   * 사용자 정보가 없는 경우
   */
  if (!user) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        프로필을 불러올 수 없습니다.
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <ProfileHeader
        user={user}
        isFollowing={isFollowing}
        onToggleFollow={handleFollow}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          border: "1px solid #222",
          borderTop: "none",
        }}
      >
        {/* 메인 */}
        <section
          style={{
            flex: 1,
            minWidth: 0,
            padding: 32,
          }}
        >
          {/* 프로필 정보 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            {/* 프로필 이미지 */}
            <div
              style={{
                width: 72,
                height: 72,
                flexShrink: 0,
                border: "1px solid #222",
                borderRadius: 8,
                background: "#eee",
                overflow: "hidden",
                marginRight: 16,
              }}
            >
              {user.profileImageUrl && (
                <img
                  src={user.profileImageUrl}
                  alt={user.nickname}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 20,
                }}
              >
                {user.nickname}
              </h2>

              {user.bio && (
                <p
                  style={{
                    margin: "6px 0 0",
                    color: "#555",
                  }}
                >
                  {user.bio}
                </p>
              )}
            </div>

            {/* 팔로우 수 */}
            <div
              style={{
                display: "flex",
                gap: 24,
                marginLeft: "auto",
              }}
            >
              <span>팔로잉 {user.followingCount ?? 0}</span>

              <span>팔로워 {user.followerCount ?? 0}</span>
            </div>
          </div>

          {/* 정렬 */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 20,
            }}
          >
            <select
              style={{
                padding: "6px 10px",
                borderRadius: 6,
              }}
            >
              <option>최신순</option>
              <option>오래된순</option>
            </select>
          </div>

          {/* 일기 */}
          <DiaryGrid diaries={paginatedDiaries} />

          {/* 페이지네이션 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={setCurrentPage}
          />
        </section>

        {/* 오른쪽 */}
        <ProfileSidebar
          activities={activities}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </main>
  );
}
