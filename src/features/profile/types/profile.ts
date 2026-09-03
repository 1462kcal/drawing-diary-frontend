export interface ProfileUser {
  id: number;
  email?: string;
  nickname: string;
  profileImageUrl: string | null;

  // 현재 API에는 없으므로 선택값
  bio?: string;

  // 현재 API에는 없으므로 선택값
  followerCount?: number;
  followingCount?: number;
}

export interface Diary {
  id: number;

  title: string;
  content: string;

  thumbnailUrl: string | null;
  imageUrl: string | null;

  createdAt: string;

  categoryId?: number;
  categoryName?: string;

  visibility?: "PUBLIC" | "PRIVATE" | "FOLLOWERS_ONLY";
}

export interface Activity {
  date: string;
  count: number;
}

export interface Category {
  id: number;
  name: string;
}
