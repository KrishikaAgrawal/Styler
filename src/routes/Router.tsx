import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import RegisteredLayout from "@/layouts/RegisteredLayout";
// import HomePgNavbar from "@/components/common/HomePgNavbar";
import STFooter from "@/components/common/STFooter";
// import { STNavbar } from "@/components/common";
import HomePgNavbar from "@/components/common/HomePgNavbar";

import useUserContext from "@/context/useUserContext";
import ScrollToTop from "@/components/common/ScrollToTop";
import Sidebar from "@/components/common/Sidebar";
import LayoutWithNavbar from "@/layouts/LayoutWithNavbar";
import { VendorOnboarding } from "@/pages/VendorOnboarding/VerdorOnboarding";

const Router: React.FC = () => {
  const { isRegistered } = useUserContext();
  console.log(isRegistered);
  return (
    <BrowserRouter>
      {/* {isRegistered ? <STNavbar /> : <HomePgNavbar />} */}
      {/* {isRegistered ? <Sidebar /> : <HomePgNavbar />} */}
      {/* <STNavbar /> */}
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={React.createElement(
            isRegistered ? RegisteredLayout : LayoutWithNavbar
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
      </Routes>

      {/* {isRegistered ? <></> : <STFooter />} */}
      {/* <STFooter /> */}
    </BrowserRouter>
  );
};

export default Router;
