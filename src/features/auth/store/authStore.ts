import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userId: number | null;

  login: (accessToken: string, refreshToken: string, userId: number) => void;

  updateAccessToken: (accessToken: string) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // =====================================
  // 초기 상태
  // =====================================

  accessToken: localStorage.getItem("accessToken"),

  refreshToken: localStorage.getItem("refreshToken"),

  userId: (() => {
    const value = localStorage.getItem("userId");

    return value ? Number(value) : null;
  })(),

  // =====================================
  // Login
  // =====================================

  login: (accessToken, refreshToken, userId) => {
    localStorage.setItem("accessToken", accessToken);

    localStorage.setItem("refreshToken", refreshToken);

    localStorage.setItem("userId", String(userId));

    set({
      accessToken,
      refreshToken,
      userId,
    });
  },

  // =====================================
  // Access Token 갱신
  // =====================================

  updateAccessToken: (accessToken) => {
    localStorage.setItem("accessToken", accessToken);

    set({
      accessToken,
    });
  },

  // =====================================
  // Logout
  // =====================================

  logout: () => {
    localStorage.removeItem("accessToken");

    localStorage.removeItem("refreshToken");

    localStorage.removeItem("userId");

    set({
      accessToken: null,
      refreshToken: null,
      userId: null,
    });
  },
}));
