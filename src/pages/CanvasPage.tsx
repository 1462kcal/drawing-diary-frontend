import { CanvasStage, Toolbar, Sidebar } from "../features/canvas";

export default function CanvasPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        marginTop: 20,
      }}
    >
      <Sidebar />

      <CanvasStage />

      <Toolbar />
    </div>
  );
}
