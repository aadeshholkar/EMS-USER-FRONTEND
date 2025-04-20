import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("authToken"); // Ensure consistent key

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
