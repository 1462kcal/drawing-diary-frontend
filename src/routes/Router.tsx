//canvasPage
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CanvasPage from "../pages/CanvasPage";

export default function Router() {
  return (
    <BrowserRouter basename="/drawing-diary-frontend/">
      <Routes>
        <Route path="/" element={<CanvasPage />} />
      </Routes>
    </BrowserRouter>
  );
}
