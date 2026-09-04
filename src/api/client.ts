const API_BASE_URL = "https://drawing-diary-production.up.railway.app";

// ========================================
// Access Token 갱신
// ========================================

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
      }),
    });

    // refresh 실패
    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!data.accessToken) {
      return null;
    }

    // 새 accessToken 저장
    localStorage.setItem("accessToken", data.accessToken);

    return data.accessToken;
  } catch (error) {
    console.error("Access Token 갱신 실패:", error);

    return null;
  }
}

// ========================================
// 인증 정보 삭제
// ========================================

function clearAuth() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");
}

// ========================================
// API 요청
// ========================================

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  let accessToken = localStorage.getItem("accessToken");

  const request = async (token: string | null) => {
    const headers = new Headers(options.headers);

    headers.set("Content-Type", "application/json");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });
  };

  // ========================================
  // 1차 요청
  // ========================================

  let response = await request(accessToken);

  // ========================================
  // ⭐ 401만 refresh 대상
  // ========================================

  if (response.status === 401) {
    const newAccessToken = await refreshAccessToken();

    // ======================================
    // Refresh 성공
    // ======================================

    if (newAccessToken) {
      accessToken = newAccessToken;

      // 원래 요청 다시 실행
      response = await request(newAccessToken);
    } else {
      // ====================================
      // Refresh Token도 만료/무효
      // ====================================

      clearAuth();

      window.location.href = "/login";

      throw new Error("로그인이 만료되었습니다. 다시 로그인해주세요.");
    }
  }

  // ========================================
  // 403 = 권한 문제
  // ⭐ refresh하지 않음
  // ========================================

  if (!response.ok) {
    let message = "요청에 실패했습니다.";

    try {
      const error = await response.json();

      if (error.message) {
        message = error.message;
      }

      if (error.code) {
        message = error.message ?? message;
      }
    } catch {
      // JSON body가 없는 경우
    }

    throw new Error(message);
  }

  // ========================================
  // 204 No Content
  // ========================================

  if (response.status === 204) {
    return null;
  }

  const text = await response.text();

  return text ? JSON.parse(text) : null;
}
