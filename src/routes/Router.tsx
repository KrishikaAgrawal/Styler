import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import RegisteredLayout from "@/layouts/RegisteredLayout";
import LayoutWithNavbar from "@/layouts/LayoutWithNavbar";
import ScrollToTop from "@/components/common/ScrollToTop";
import { VendorOnboarding } from "@/pages/VendorOnboarding/VerdorOnboarding";
import Profile1 from "@/pages/login/Profile1";
import Profile2 from "@/pages/login/Profile2";
// import useUserContext from "@/context/useUserContext";

const Router: React.FC = () => {
  // const { isRegistered } = useUserContext();
  const [hasToken, setHasToken] = useState<boolean>(false);
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   setHasToken(!!token); // Convert token to boolean (true if exists, false otherwise)
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const [, payload] = token.split(".");
        const { exp } = JSON.parse(atob(payload));

        if (Date.now() < exp * 1000) {
          setHasToken(true); // Token is still valid
        } else {
          localStorage.removeItem("authToken"); // Clear expired token
          setHasToken(false);
        }
      } catch (error) {
        console.error("Invalid token format:", error);
        localStorage.removeItem("authToken"); // Remove invalid token
        setHasToken(false);
      }
    } else {
      setHasToken(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={React.createElement(
            // isRegistered ? RegisteredLayout : LayoutWithNavbar
            hasToken ? RegisteredLayout : LayoutWithNavbar
          )}
        >
          {ROUTES.map((route, i) => (
            <Route
              key={`CUSTOMER_ROUTE_${i}`}
              path={route.href}
              element={React.createElement(route.page)}
            />
          ))}
        </Route>

        <Route path="/vendor-onboarding" element={<VendorOnboarding />} />
        <Route path="/Profile1" element={<Profile1 />} />
        <Route path="/Profile2" element={<Profile2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
