import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CanvasPage from "../pages/CanvasPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";

export default function Router() {
  return (
    <BrowserRouter basename="/drawing-diary-frontend/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<HomePage />} />
        <Route path="/ranking" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
