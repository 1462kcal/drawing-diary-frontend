import { apiFetch } from "./client";

export interface CreateRoomResponse {
  roomId: number;
}

export interface RoomCanvasResponse {
  canvasData: string | null;
  title: string | null;
  content: string | null;
}

// ========================================
// Room 생성
// ========================================

export async function createRoom(): Promise<CreateRoomResponse> {
  return apiFetch("/api/rooms", {
    method: "POST",
  });
}

// ========================================
// 작업 중인 Canvas 조회
// ========================================

export async function getRoomCanvas(
  roomId: number,
): Promise<RoomCanvasResponse> {
  return apiFetch(`/api/rooms/${roomId}/canvas`);
}

// ========================================
// 작업 중인 Canvas 저장
// ========================================

export async function saveRoomCanvas(
  roomId: number,
  data: {
    canvasData?: string;
    title?: string;
    content?: string;
  },
) {
  return apiFetch(`/api/rooms/${roomId}/canvas`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

// ========================================
// Diary 발행
// ========================================

export async function submitRoom(
  roomId: number,
  data: {
    canvasData: string;
    title: string;
    content: string;
    finalImg: string;
    visibility: "PUBLIC" | "PRIVATE";
    categoryId: number | null;
  },
) {
  return apiFetch(`/api/rooms/${roomId}/submit`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
