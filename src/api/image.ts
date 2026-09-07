const API_BASE_URL = "https://drawing-diary-production.up.railway.app";

// ========================================
// 이미지 업로드
// ========================================

export interface UploadImageResponse {
  url: string;
}

export async function uploadImage(
  canvasData: string,
): Promise<UploadImageResponse> {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

  // ========================================
  // Base64 → Blob
  // ========================================

  const base64 = canvasData.includes(",")
    ? canvasData.split(",")[1]
    : canvasData;

  if (!base64) {
    throw new Error("이미지 데이터가 없습니다.");
  }

  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray], {
    type: "image/png",
  });

  // ========================================
  // FormData 생성
  // ========================================

  const formData = new FormData();

  formData.append("file", blob, "drawing-diary.png");

  // ========================================
  // 이미지 업로드
  // ========================================

  const response = await fetch(`${API_BASE_URL}/api/images`, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${accessToken}`,
    },

    // ⚠️ Content-Type 직접 지정하면 안 됨
    // 브라우저가 multipart/form-data boundary를 자동으로 붙임
    body: formData,
  });

  // ========================================
  // 에러 처리
  // ========================================

  if (!response.ok) {
    let message = "이미지 업로드에 실패했습니다.";

    try {
      const error = await response.json();

      if (error.message) {
        message = error.message;
      }
    } catch {
      // JSON 응답이 아닌 경우 기본 메시지 사용
    }

    throw new Error(message);
  }

  // ========================================
  // 업로드 결과
  // ========================================

  const data = (await response.json()) as UploadImageResponse;

  if (!data.url) {
    throw new Error("이미지 URL을 받지 못했습니다.");
  }

  return data;
}
