import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileHeader from "../features/profile/components/ProfileHeader";
import ProfileDiaryGrid from "../features/profile/components/ProfileDiaryGrid";

import {
  getMyProfile,
  getMyDiaries,
  getFollowers,
  getFollowings,
} from "../features/profile/services/profileService";

import type {
  Profile,
  ProfileDiary,
  FollowUser,
} from "../features/profile/types/profile";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [diaries, setDiaries] = useState<ProfileDiary[]>([]);

  const [followers, setFollowers] = useState<FollowUser[]>([]);
  const [followings, setFollowings] = useState<FollowUser[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getMyProfile();

        setProfile(profileData);

        const [diaryData, followerData, followingData] = await Promise.all([
          getMyDiaries(),
          getFollowers(profileData.id),
          getFollowings(profileData.id),
        ]);

        setDiaries(diaryData);
        setFollowers(followerData);
        setFollowings(followingData);
      } catch (error) {
        console.error("프로필 조회 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>프로필을 불러오는 중...</div>;
  }

  if (!profile) {
    return <div>프로필을 불러오지 못했습니다.</div>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
      }}
    >
      {/* 상단 */}
      <ProfileHeader
        profile={profile}
        followerCount={followers.length}
        followingCount={followings.length}
        onBack={() => navigate(-1)}
        onEdit={() => navigate("/profile/edit")}
      />

      {/* 일기 */}
      <ProfileDiaryGrid diaries={diaries} />
    </main>
  );
}
