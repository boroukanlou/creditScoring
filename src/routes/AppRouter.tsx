import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/auth/Login";
import { useAuthStore } from "@/stores/AuthStores";
import Dashboard from "@/pages/Dashboard";
import NewCustomer from "@/pages/NewCustomer";
import Reports from "@/pages/Reports";
import EditRules from "@/pages/EditRules";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* protected pages */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-customer"
          element={
            <ProtectedRoute>
              <NewCustomer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-rules"
          element={
            <ProtectedRoute>
              <EditRules />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
