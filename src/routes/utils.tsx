import {
  DASHBOARD_ROUTE,
  NOTIFICATIONS_ROUTE,
  SETTINGS_ROUTE,
} from "constants/paths";
import Dashboard from "pages/Dashboard";
import Notifications from "pages/Notifications";
import Settings from "pages/Settings";

interface Route {
  path: string;
  element: React.ReactNode;
}

export const routes: Route[] = [
  {
    path: DASHBOARD_ROUTE,
    element: <Dashboard />,
  },
  {
    path: NOTIFICATIONS_ROUTE,
    element: <Notifications />,
  },
  {
    path: SETTINGS_ROUTE,
    element: <Settings />,
  },
];
