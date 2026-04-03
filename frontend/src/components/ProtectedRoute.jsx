import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {

  const { user, loading } = useAuth();

  // Wait until auth check finishes
  if (loading) {
    return null;
  }

  // If not logged in → redirect
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;