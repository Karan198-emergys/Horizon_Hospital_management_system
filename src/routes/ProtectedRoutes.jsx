import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ children, allowedRoles }) => {
  const { role, token } = useSelector((state) => state.authentication);

  const userRole = localStorage.getItem("role");

  if (!role && !token) {
    return <Navigate to="/login" replace />;
  }
  if (role && allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />;
  }
  return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};
export default ProtectedRoutes;
