import { useNavigate } from "react-router-dom";

import { logout } from "../../features/auth/services/authService";
import { useAuthStore } from "../../features/auth/store/authStore";

export default function LogoutButton() {
  const navigate = useNavigate();

  const refreshToken = useAuthStore((state) => state.refreshToken);

  const clearAuth = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      // refreshToken이 있을 때만 로그아웃 API 호출
      if (refreshToken) {
        await logout(refreshToken);
      }
    } catch (error) {
      console.error("로그아웃 API 요청 실패:", error);
    } finally {
      // 서버 요청 성공 여부와 관계없이 클라이언트 로그인 상태 초기화
      clearAuth();

      // 홈으로 이동
      navigate("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      style={{
        width: "100%",
        padding: "8px 12px",
        border: "1px solid #ddd",
        borderRadius: 6,
        background: "#fff",
        cursor: "pointer",
      }}
    >
      로그아웃
    </button>
  );
}
