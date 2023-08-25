import React from "react";
import { Content } from "./MainLayout.styles";
import { Outlet } from "react-router-dom";

const MainLayoutContent: React.FC = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

export default MainLayoutContent;
