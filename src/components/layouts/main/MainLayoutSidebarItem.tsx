import React from "react";
import { SidebarItem, SidebarItemCounter } from "./MainLayout.styles";
import { SidebarTile } from "interfaces/";

interface Props extends SidebarTile {
  active: boolean;
}

const MainLayoutSidebarItem: React.FC<Props> = ({
  icon,
  text,
  href,
  notificationCounter,
  active,
}) => {
  return (
    <SidebarItem to={href} active={active}>
      {icon}
      {text}
      {notificationCounter && (
        <SidebarItemCounter active={active}>
          {notificationCounter}
        </SidebarItemCounter>
      )}
    </SidebarItem>
  );
};

export default MainLayoutSidebarItem;
