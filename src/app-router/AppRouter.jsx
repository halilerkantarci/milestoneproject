import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AddUser } from "../helpers/functions";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const initialValues = { title: "", img: "", content: "" };

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.email, "approuter");
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [info, setInfo] = useState(initialValues);
  const handleSubmit = (e) => {
    // e.preventDefault();

    AddUser(info, currentUser.email);
    setInfo(initialValues);

    navigate("/");
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="login"
          element={<Login setEmail={setEmail} email={email} />}
        />

        <Route path="register" element={<Register />} />
        <Route path="details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>

        <Route path="profile" element={<Profile />} />
        <Route
          path="newblog"
          element={
            <NewBlog
              info={info}
              setInfo={setInfo}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="logout" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
