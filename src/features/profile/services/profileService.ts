import { apiFetch } from "../../../api/client";

import type { ProfileUser, Diary } from "../types/profile";

/**
 * 내 프로필 조회
 *
 * GET /api/users/me
 */
export async function getMyProfile(): Promise<ProfileUser> {
  return apiFetch("/api/users/me");
}

/**
 * 내 일기 목록 조회
 *
 * GET /api/diaries/my
 */
export async function getMyDiaries(): Promise<Diary[]> {
  const data = await apiFetch("/api/diaries/my");

  return data.map(
    (diary: {
      id: number;
      title: string;
      createdAt: string;
      thumbnailUrl: string | null;
      visibility: "PUBLIC" | "PRIVATE" | "FOLLOWERS_ONLY";
    }) => ({
      id: diary.id,
      title: diary.title,
      imageUrl: diary.thumbnailUrl,
      createdAt: diary.createdAt,
      visibility: diary.visibility,
    }),
  );
}

/**
 * 팔로우
 *
 * POST /api/users/{userId}/follow
 */
export async function followUser(userId: number): Promise<void> {
  await apiFetch(`/api/users/${userId}/follow`, {
    method: "POST",
  });
}

/**
 * 언팔로우
 *
 * DELETE /api/users/{userId}/follow
 */
export async function unfollowUser(userId: number): Promise<void> {
  await apiFetch(`/api/users/${userId}/follow`, {
    method: "DELETE",
  });
}
