import { useState } from "react";
import { createRoom } from "../../../api/room";
import { useNavigate } from "react-router-dom";

import ProfileSummary from "./ProfileSummary";
import HomeNavigation from "./HomeNavigation";

import type { User } from "../types/user";

import LogoutButton from "../../../components/common/LogoutButton";

interface SidebarProps {
  user: User | null;
  loading?: boolean;
}

export default function Sidebar({ user, loading = false }: SidebarProps) {
  const [creatingRoom, setCreatingRoom] = useState(false);
  const navigate = useNavigate();

  const handleCreateDiary = async () => {
    if (creatingRoom) return;

    try {
      setCreatingRoom(true);

      // Room 생성
      const { roomId } = await createRoom();

      console.log("생성된 roomId:", roomId);

      // 생성된 Room으로 Canvas 이동
      navigate(`/canvas/${roomId}`);
    } catch (error) {
      console.error("Room 생성 실패:", error);
      alert("그림일기를 만들 수 없어요. 잠시 후 다시 시도해주세요.");
    } finally {
      setCreatingRoom(false);
    }
  };

  return (
    <aside className="home-sidebar">
      <ProfileSummary user={user} loading={loading} />

      <div className="sidebar-navigation">
        <HomeNavigation />
      </div>

      <button
        type="button"
        className="create-diary-button"
        onClick={handleCreateDiary}
        disabled={creatingRoom}
      >
        <span>✦</span>
        {creatingRoom ? "방 만드는 중..." : "그림일기 쓰기"}
      </button>

      {!loading && user && (
        <div className="sidebar-logout">
          <LogoutButton />
        </div>
      )}
    </aside>
  );
}
