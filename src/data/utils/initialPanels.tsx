import { GoHomeFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import {
  DASHBOARD_ROUTE,
  NOTIFICATIONS_ROUTE,
  SETTINGS_ROUTE,
} from "constants/paths";
import { SidebarTile } from "interfaces/";

export const initialPanels: SidebarTile[] = [
  {
    icon: <GoHomeFill size={36} />,
    text: "Dashboard",
    href: DASHBOARD_ROUTE,
  },
  {
    icon: <AiFillMessage size={36} />,
    text: "Notifications",
    href: NOTIFICATIONS_ROUTE,
  },
  {
    icon: <IoSettingsSharp size={36} />,
    text: "Settings",
    href: SETTINGS_ROUTE,
  },
];
