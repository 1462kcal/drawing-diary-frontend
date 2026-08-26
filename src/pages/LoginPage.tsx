import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../features/auth/services/authService";
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

      // 로그인 성공 → 홈
      navigate("/", { replace: true });
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
        alignItems: "center",
        justifyContent: "center",

        padding: 24,
        boxSizing: "border-box",

        backgroundColor: "#F5F2EC",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 420,

          padding: "48px 44px",

          boxSizing: "border-box",

          border: "1px solid #E5E0D8",
          borderRadius: 20,

          backgroundColor: "#FFFEFB",

          boxShadow: "0 12px 40px rgba(52, 49, 45, 0.06)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              marginBottom: 12,

              fontSize: 24,
              fontWeight: 700,

              letterSpacing: "-0.03em",

              color: "#34312D",
            }}
          >
            drawing diary
          </div>

          <p
            style={{
              margin: 0,

              fontSize: 14,
              lineHeight: 1.6,

              color: "#8A847C",
            }}
          >
            오늘의 그림일기를 시작해요.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            style={{
              width: "100%",
              boxSizing: "border-box",

              padding: "13px 14px",

              border: "1px solid #E3DED6",
              borderRadius: 12,

              outline: "none",

              backgroundColor: "#F8F5F0",

              fontSize: 14,
              color: "#34312D",
            }}
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            style={{
              width: "100%",
              boxSizing: "border-box",

              padding: "13px 14px",

              border: "1px solid #E3DED6",
              borderRadius: 12,

              outline: "none",

              backgroundColor: "#F8F5F0",

              fontSize: 14,
              color: "#34312D",
            }}
          />

          {error && (
            <p
              style={{
                margin: "2px 0 0",

                fontSize: 13,
                lineHeight: 1.5,

                color: "#C75B5B",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 8,

              width: "100%",
              padding: "13px 14px",

              border: "none",
              borderRadius: 12,

              backgroundColor: "#34312D",
              color: "#FFFFFF",

              fontSize: 14,
              fontWeight: 700,

              cursor: loading ? "default" : "pointer",

              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        {/* Signup */}
        <div
          style={{
            marginTop: 28,

            textAlign: "center",

            fontSize: 13,
            color: "#8A847C",
          }}
        >
          아직 계정이 없나요?
          <button
            type="button"
            onClick={() => navigate("/signup")}
            disabled={loading}
            style={{
              marginLeft: 6,

              padding: 0,

              border: "none",

              background: "none",

              color: "#34312D",

              fontSize: 13,
              fontWeight: 700,

              cursor: "pointer",
            }}
          >
            회원가입
          </button>
        </div>
      </section>
    </main>
  );
}
