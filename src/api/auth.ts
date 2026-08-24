import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "../features/auth/types/auth";

const BASE_URL = "https://drawing-diary-production.up.railway.app";

/**
 * 로그인
 */
export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
  }

  return response.json();
}

/**
 * 회원가입
 */
export async function signup(data: SignupRequest): Promise<SignupResponse> {
  const response = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("회원가입에 실패했습니다.");
  }

  return response.json();
}

/**
 * 로그아웃
 */
export async function logout(refreshToken: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error("로그아웃 요청에 실패했습니다.");
  }
}
