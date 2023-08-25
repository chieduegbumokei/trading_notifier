import React from "react";
import { SidebarItems } from "./MainLayout.styles";
import MainLayoutSidebarItem from "./MainLayoutSidebarItem";
import { useAppSelector } from "store/hooks";
import { useLocation } from "react-router-dom";

const MainLayoutSidebarItems: React.FC = () => {
  const panels = useAppSelector((state) => state.dashboard.panels);
  const location = useLocation();

  return (
    <SidebarItems>
      {panels.map((panel, i) => (
        <MainLayoutSidebarItem
          key={i}
          icon={panel.icon}
          text={panel.text}
          href={panel.href}
          notificationCounter={panel.notificationCounter}
          active={location.pathname === panel.href}
        />
      ))}
    </SidebarItems>
  );
};

export default MainLayoutSidebarItems;
