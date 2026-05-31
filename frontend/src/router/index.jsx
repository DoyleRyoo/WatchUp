import { Routes, Route, } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "../components/common/ProtectedRoute";

function Router() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default Router;