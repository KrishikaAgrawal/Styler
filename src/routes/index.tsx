// import LandingPage from "@/pages";
import HomePage from "@/pages";
import Login from "@/pages/login/Login";
import Signup from "@/pages/login/Signup";
import Signin from "@/pages/login/Signin";
import Profile1 from "@/pages/login/Profile1";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile1" element={<Profile1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
