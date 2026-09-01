import { useNavigate } from "react-router-dom";

export default function LoginRequired() {
  const navigate = useNavigate();

  return (
    <div className="login-required">
      <div className="login-window">
        <div className="retro-titlebar">
          <span>LOGIN REQUIRED</span>

          <div className="retro-window-buttons">
            <span />
            <span />
          </div>
        </div>

        <div className="login-window-body">
          <div className="login-icon">♡</div>

          <span className="login-label">DIARY COMMUNITY</span>

          <h2>로그인이 필요해요.</h2>

          <p>
            팔로잉한 사람들의
            <br />
            그림일기를 보려면
            <br />
            로그인해주세요.
          </p>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="login-button"
          >
            로그인하기 →
          </button>
        </div>
      </div>
    </div>
  );
}
