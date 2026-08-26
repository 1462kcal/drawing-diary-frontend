import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CanvasPage from "../pages/CanvasPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export default function Router() {
  return (
    <BrowserRouter basename="/drawing-diary-frontend/">
      <Routes>
        {/* 로그인하지 않아도 접근 가능한 페이지 */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        {/* 로그인해야 접근 가능한 페이지 */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<HomePage />} />
          <Route path="/ranking" element={<HomePage />} />
          <Route path="/canvas" element={<CanvasPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
