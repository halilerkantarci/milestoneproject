import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
