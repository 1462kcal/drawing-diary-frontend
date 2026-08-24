import { apiFetch } from "../../../api/client";

import type { Profile, ProfileDiary, FollowUser } from "../types/profile";

export const getMyProfile = async (): Promise<Profile> => {
  return apiFetch("/api/users/me");
};

export const getMyDiaries = async (): Promise<ProfileDiary[]> => {
  return apiFetch("/api/diaries/my");
};

export const getFollowers = async (userId: number): Promise<FollowUser[]> => {
  return apiFetch(`/api/users/${userId}/followers`);
};

export const getFollowings = async (userId: number): Promise<FollowUser[]> => {
  return apiFetch(`/api/users/${userId}/followings`);
};
