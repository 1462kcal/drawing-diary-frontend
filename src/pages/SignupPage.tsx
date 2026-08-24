import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { signup } from "../features/auth/services/authService";

export default function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email || !password || !nickname) {
      setError("이메일, 비밀번호, 닉네임을 모두 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      await signup({
        email,
        password,
        nickname,
      });

      alert("회원가입이 완료되었습니다.");

      navigate("/login");
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error ? error.message : "회원가입에 실패했습니다.",
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
        <h1>회원가입</h1>

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

          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
            {loading ? "회원가입 중..." : "회원가입"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate("/login")}
          style={{
            marginTop: 16,
            width: "100%",
          }}
        >
          로그인으로 돌아가기
        </button>
      </section>
    </main>
  );
}
