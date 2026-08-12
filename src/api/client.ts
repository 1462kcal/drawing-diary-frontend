const API_BASE_URL = "https://drawing-diary-production.up.railway.app";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const accessToken = localStorage.getItem("accessToken");

  const headers = new Headers(options.headers);

  headers.set("Content-Type", "application/json");

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let message = "요청에 실패했습니다.";

    try {
      const error = await response.json();

      if (error.message) {
        message = error.message;
      }
    } catch {
      // 응답 body가 없는 경우
    }

    throw new Error(message);
  }

  // 204 또는 body 없는 응답 처리
  if (response.status === 204) {
    return null;
  }

  const text = await response.text();

  return text ? JSON.parse(text) : null;
}
