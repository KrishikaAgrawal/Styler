import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "semantic-ui-react";

const RegisteredLayout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RegisteredLayout;
