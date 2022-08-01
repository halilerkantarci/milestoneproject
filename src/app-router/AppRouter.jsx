import React, { useState } from "react";
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

const initialValues = { title: "", img: "", content: "" };

const AppRouter = () => {
  const [info, setInfo] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(initialValues);
    AddUser(info);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />
        <Route path="details" element={<Details />} />

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
    </BrowserRouter>
  );
};

export default AppRouter;
