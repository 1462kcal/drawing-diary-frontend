import {
  login as loginApi,
  signup as signupApi,
  logout as logoutApi,
} from "../../../api/auth";

import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "../types/auth";

/**
 * 로그인
 */
export async function login(data: LoginRequest): Promise<LoginResponse> {
  return loginApi(data);
}

/**
 * 회원가입
 */
export async function signup(data: SignupRequest): Promise<SignupResponse> {
  return signupApi(data);
}

/**
 * 로그아웃
 */
export async function logout(refreshToken: string): Promise<void> {
  return logoutApi(refreshToken);
}
