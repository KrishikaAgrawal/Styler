import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "semantic-ui-css/semantic.min.css";

import LandingPage from "@/pages/LandingPage";
import HomePage from "@/pages";
import Login from "@/pages/login/Login";
import Signup from "@/pages/login/Signup";
import Signin from "@/pages/login/Signin";
import Profile1 from "@/pages/login/Profile1";
import Profile2 from "@/pages/login/Profile2";
import Otp from "@/pages/login/Otp";
import ForgotPassword from "@/pages/login/ForgotPassword";
import AboutUs from "@/pages/FooterLinks/AboutUs";
import PartnerWithUs from "@/pages/FooterLinks/PartnerWithUs";
import PrivacyPolicy from "@/pages/FooterLinks/PrivacyPolicy";
import TermsAndConditions from "@/pages/FooterLinks/TermsAndConditions";

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
        <Route path="/Profile2" element={<Profile2 />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/PartnerWithUs" element={<PartnerWithUs />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
