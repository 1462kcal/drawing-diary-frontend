import { BrowserRouter, Routes, Route } from "react-router-dom";

import CanvasPage from "../pages/CanvasPage";
import LoginPage from "../pages/LoginPage";

export default function Router() {
  return (
    <BrowserRouter basename="/drawing-diary-frontend/">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
      </Routes>
    </BrowserRouter>
  );
}
