import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import Layout from "@/layouts/Layout";
// import HomePgNavbar from "@/components/common/HomePgNavbar";
import STFooter from "@/components/common/STFooter";
import { STNavbar } from "@/components/common";
import HomePgNavbar from "@/components/common/HomePgNavbar";

import useUserContext from "@/context/useUserContext";
import ScrollToTop from "@/components/common/ScrollToTop";

const Router: React.FC = () => {
  const { isRegistered } = useUserContext();
  console.log(isRegistered);
  return (
    <BrowserRouter>
      {isRegistered ? <STNavbar /> : <HomePgNavbar />}
      {/* <STNavbar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={React.createElement(Layout)}>
          {ROUTES.map((route, i) => (
            <Route
              key={`CUSTOMER_ROUTE_${i}`}
              path={route.href}
              element={React.createElement(route.page)}
            />
          ))}
        </Route>
      </Routes>
      <STFooter />
    </BrowserRouter>
  );
};

export default Router;
