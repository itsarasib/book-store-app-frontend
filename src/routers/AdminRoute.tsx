import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/admin" />;
  }
  return children ? children : <Outlet />;
};

export default AdminRoute;
