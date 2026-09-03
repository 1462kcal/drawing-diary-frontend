import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { signup } from "../features/auth/services/authService";

import "../features/auth/styles/signup.css";

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
    <main className="auth-page signup-page">
      <section className="auth-window">
        {/* Window Header */}
        <header className="auth-window-header">
          <div className="auth-window-controls">
            <span />
            <span />
            <span />
          </div>

          <span className="auth-window-title">drawing diary.</span>

          <div className="auth-window-spacer" />
        </header>

        {/* Content */}
        <div className="auth-content">
          <div className="auth-logo">
            <span className="auth-logo-mark">✦</span>

            <h1>join drawing diary</h1>

            <p>
              나만의 그림일기를
              <br />
              함께 시작해요.
            </p>
          </div>

          <div className="auth-section-label">CREATE ACCOUNT</div>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-field">
              <span>EMAIL</span>

              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </label>

            <label className="auth-field">
              <span>PASSWORD</span>

              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </label>

            <label className="auth-field">
              <span>NICKNAME</span>

              <input
                type="text"
                placeholder="사용할 닉네임을 입력해주세요"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                disabled={loading}
              />
            </label>

            {error && <p className="auth-error">! {error}</p>}

            <button
              type="submit"
              className="auth-submit-button"
              disabled={loading}
            >
              {loading ? "회원가입 중..." : "계정 만들기 →"}
            </button>
          </form>

          <div className="auth-divider">
            <span />
            <small>ALREADY A MEMBER?</small>
            <span />
          </div>

          <div className="auth-signup">
            <span>이미 계정이 있나요?</span>

            <button
              type="button"
              onClick={() => navigate("/login")}
              disabled={loading}
            >
              로그인 →
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="auth-footer">
          <span>♡ shared diary</span>

          <span>SIGN UP / 01</span>
        </footer>
      </section>
    </main>
  );
}
