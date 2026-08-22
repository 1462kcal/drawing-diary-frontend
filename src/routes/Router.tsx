import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CanvasPage from "../pages/CanvasPage";
import LoginPage from "../pages/LoginPage";

export default function Router() {
  return (
    <BrowserRouter basename="/drawing-diary-frontend/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<HomePage />} />
        <Route path="/ranking" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
      </Routes>
    </BrowserRouter>
  );
}
