import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = () => {
  const toLocation = useLocation();

  const { token, isAuthenticated, isAdmin } = useSelector(
    (state) => state.authentication
  );

  if (!token && isAuthenticated) {
    toLocation("/login");
  }
  if (token && isAdmin) {
    toLocation("/adminDashboard");
  }
  if (token && !isAdmin) {
    toLocation("/patientDashboard");
  }
};

export default ProtectedRoutes;
