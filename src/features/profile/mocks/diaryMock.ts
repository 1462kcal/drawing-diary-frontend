import type { ProfileUser, Diary, Category, Activity } from "../types/profile";

export const MOCK_USER: ProfileUser = {
  id: 1,
  nickname: "닉네임",
  profileImageUrl: null,
  bio: "자소",
  followerCount: 0,
  followingCount: 0,
};

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "카테고리 1",
  },
  {
    id: 2,
    name: "카테고리 2",
  },
];

export const MOCK_DIARIES: Diary[] = [
  {
    id: 1,
    title: "오늘의 일기",
    imageUrl: null,
    createdAt: "2026-08-25",
    categoryId: 1,
    categoryName: "카테고리 1",
    visibility: "PUBLIC",
  },
  {
    id: 2,
    title: "ㅇㅇ",
    imageUrl: null,
    createdAt: "2026-08-24",
    categoryId: 1,
    categoryName: "카테고리 1",
    visibility: "PUBLIC",
  },
  {
    id: 3,
    title: "ㅇㅇ2",
    imageUrl: null,
    createdAt: "2026-08-23",
    categoryId: 2,
    categoryName: "카테고리 2",
    visibility: "PRIVATE",
  },
  {
    id: 4,
    title: "주말 일기",
    imageUrl: null,
    createdAt: "2026-08-22",
    categoryId: 1,
    categoryName: "카테고리 1",
    visibility: "PUBLIC",
  },
  {
    id: 5,
    title: "그림일기",
    imageUrl: null,
    createdAt: "2026-08-21",
    categoryId: 2,
    categoryName: "카테고리 2",
    visibility: "PUBLIC",
  },
  {
    id: 6,
    title: "ㄲㄱㄱ",
    imageUrl: null,
    createdAt: "2026-08-20",
    categoryId: 2,
    categoryName: "카테고리 2",
    visibility: "PUBLIC",
  },
];

export const MOCK_ACTIVITIES: Activity[] = [
  {
    date: "2026-08-20",
    count: 1,
  },
  {
    date: "2026-08-21",
    count: 3,
  },
  {
    date: "2026-08-22",
    count: 2,
  },
  {
    date: "2026-08-23",
    count: 5,
  },
  {
    date: "2026-08-24",
    count: 1,
  },
  {
    date: "2026-08-25",
    count: 7,
  },
];
