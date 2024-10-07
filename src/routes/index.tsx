// import LandingPage from "@/pages";
import HomePage from "@/pages";
import Login from "@/pages/login/Login";
import Signup from "@/pages/login/Signup";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
