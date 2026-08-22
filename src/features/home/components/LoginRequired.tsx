import { useNavigate } from "react-router-dom";

export default function LoginRequired() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fff",
        textAlign: "center",
        padding: 32,
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
        }}
      >
        로그인이 필요한 기능이에요
      </h3>

      <p
        style={{
          margin: "0 0 20px",
          color: "#777",
          lineHeight: 1.5,
        }}
      >
        팔로잉한 사람들의 그림일기를 보려면
        <br />
        로그인해주세요.
      </p>

      <button
        onClick={() => navigate("/login")}
        style={{
          padding: "10px 24px",
          border: "none",
          borderRadius: 6,
          background: "#222",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        로그인
      </button>
    </div>
  );
}
