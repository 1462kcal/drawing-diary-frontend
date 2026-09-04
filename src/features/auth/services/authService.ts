import {
  login as loginApi,
  signup as signupApi,
  logout as logoutApi,
  refreshAccessToken as refreshAccessTokenApi,
} from "../../../api/auth";

import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "../types/auth";

// ========================================
// 로그인
// ========================================

export async function login(data: LoginRequest): Promise<LoginResponse> {
  return loginApi(data);
}

// ========================================
// 회원가입
// ========================================

export async function signup(data: SignupRequest): Promise<SignupResponse> {
  return signupApi(data);
}

// ========================================
// Access Token 갱신
// ========================================

export async function refreshAccessToken(
  refreshToken: string,
): Promise<string> {
  const response = await refreshAccessTokenApi(refreshToken);

  return response.accessToken;
}

// ========================================
// 로그아웃
// ========================================

export async function logout(refreshToken: string): Promise<void> {
  return logoutApi(refreshToken);
}
