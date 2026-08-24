export interface ProfileDiary {
  id: number;
  title: string;
  createdAt: string;
  thumbnailUrl: string | null;
  visibility: "PUBLIC" | "PRIVATE" | "FOLLOWERS_ONLY";
}

export interface FollowUser {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface Profile {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}
