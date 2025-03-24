import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = () => {
  const toLocation = useLocation();

  const { token } = useSelector((state) => state.authentication);

  return token ? <Outlet /> : toLocation("/login");
};

export default ProtectedRoutes;
