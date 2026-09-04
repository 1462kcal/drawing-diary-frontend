import { useEffect, useState } from "react";

import { useAuthStore } from "../store/authStore";

const API_BASE_URL = "https://drawing-diary-production.up.railway.app";

interface Props {
  children: React.ReactNode;
}

export default function AuthInitializer({ children }: Props) {
  const updateAccessToken = useAuthStore((state) => state.updateAccessToken);

  const logout = useAuthStore((state) => state.logout);

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");

      const refreshToken = localStorage.getItem("refreshToken");

      // ==================================
      // 로그인 정보 없음
      // ==================================

      if (!accessToken) {
        setChecking(false);
        return;
      }

      // refreshToken이 없으면
      // 정상적인 로그인 상태가 아님
      if (!refreshToken) {
        logout();
        setChecking(false);
        return;
      }

      try {
        // =================================
        // 현재 accessToken 검증
        // =================================

        const response = await fetch(`${API_BASE_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // =================================
        // accessToken 정상
        // =================================

        if (response.ok) {
          setChecking(false);
          return;
        }

        // =================================
        // accessToken 만료/무효
        // → 401만 refresh
        // =================================

        if (response.status === 401) {
          const refreshResponse = await fetch(
            `${API_BASE_URL}/api/auth/refresh`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                refreshToken,
              }),
            },
          );

          // =================================
          // refresh 성공
          // =================================

          if (refreshResponse.ok) {
            const data = await refreshResponse.json();

            if (data.accessToken) {
              updateAccessToken(data.accessToken);

              setChecking(false);
              return;
            }
          }

          // =================================
          // refresh 실패
          // =================================

          logout();

          setChecking(false);
          return;
        }

        // =================================
        // 403
        // 권한 문제이므로 refresh X
        // =================================

        console.error("프로필 조회 권한 없음");

        setChecking(false);
      } catch (error) {
        console.error("인증 초기화 실패:", error);

        logout();
        setChecking(false);
      }
    };

    initializeAuth();
  }, [logout, updateAccessToken]);

  // 인증 상태 확인 중
  if (checking) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        로그인 확인 중...
      </div>
    );
  }

  return <>{children}</>;
}
