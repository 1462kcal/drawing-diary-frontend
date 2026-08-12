import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userId: number | null;

  login: (accessToken: string, refreshToken: string, userId: number) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken"),

  refreshToken: localStorage.getItem("refreshToken"),

  userId: (() => {
    const userId = localStorage.getItem("userId");

    return userId ? Number(userId) : null;
  })(),

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
