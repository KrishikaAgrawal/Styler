import HomePgNavbar from "@/components/common/HomePgNavbar";
import STFooter from "@/components/common/STFooter";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutWithNavbar: React.FC = () => {
  return (
    <div>
      <HomePgNavbar />
      <Outlet />
      <STFooter />
    </div>
  );
};

export default LayoutWithNavbar;
