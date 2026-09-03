import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../features/auth/services/authService";
import { useAuthStore } from "../features/auth/store/authStore";

import "../features/auth/styles/login.css";

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

      navigate("/", {
        replace: true,
      });
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
    <main className="auth-page login-page">
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
            <span className="auth-logo-mark">♡</span>

            <h1>drawing diary</h1>

            <p>
              오늘의 그림일기를
              <br />
              시작해요.
            </p>
          </div>

          <div className="auth-section-label">LOGIN</div>

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

            {error && <p className="auth-error">! {error}</p>}

            <button
              type="submit"
              className="auth-submit-button"
              disabled={loading}
            >
              {loading ? "로그인 중..." : "로그인 →"}
            </button>
          </form>

          <div className="auth-divider">
            <span />
            <small>OR</small>
            <span />
          </div>

          <div className="auth-signup">
            <span>아직 계정이 없나요?</span>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              disabled={loading}
            >
              회원가입 →
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="auth-footer">
          <span>♡ shared diary</span>

          <span>LOGIN / 01</span>
        </footer>
      </section>
    </main>
  );
}
