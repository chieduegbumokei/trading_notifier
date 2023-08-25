import React from "react";
import { Header, Sidebar } from "./MainLayout.styles";
import MainLayoutSidebarItems from "./MainLayoutSidebarItems";

const MainLayoutSidebar: React.FC = () => {
  return (
    <Sidebar>
      <Header>Trading Notifier</Header>
      <MainLayoutSidebarItems />
    </Sidebar>
  );
};

export default MainLayoutSidebar;
