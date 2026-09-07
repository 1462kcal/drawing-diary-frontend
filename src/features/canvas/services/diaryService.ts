import { apiFetch } from "../../../api/client";

export interface SubmitDiaryRequest {
  title: string;
  content: string;
  finalImg: string;
  visibility: "PUBLIC" | "PRIVATE" | "FOLLOWERS_ONLY";
  categoryId: number | null;
}

export interface SubmitDiaryResponse {
  diaryId: number;
}

export async function submitDiary(
  roomId: number,
  data: SubmitDiaryRequest,
): Promise<SubmitDiaryResponse> {
  return apiFetch(`/api/rooms/${roomId}/submit`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
