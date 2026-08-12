import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../api/auth";
import { useAuthStore } from "../features/auth/store/authStore";

export default function LoginPage() {
  const navigate = useNavigate();

  const loginUser = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");

      return;
    }

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      loginUser(response.accessToken, response.refreshToken, response.userId);

      navigate("/");
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error ? error.message : "로그인에 실패했습니다.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section
        style={{
          width: 360,
          padding: 32,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <h1>로그인</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 24,
          }}
        >
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p
              style={{
                color: "red",
                margin: 0,
              }}
            >
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate("/signup")}
          style={{
            marginTop: 16,
            width: "100%",
          }}
        >
          회원가입
        </button>
      </section>
    </main>
  );
}
