import { apiFetch } from "./client";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: number;
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
  return apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
