import { DashbaordMode } from "objects/";
import React from "react";
import { useAppSelector } from "store/hooks";
import DashboardWelcome from "./DashboardWelcome";
import DashboardNoAccess from "./DashboardNoAccess";
import DashboardInsert from "./DashboardInsert";
import DashboardSearching from "./DashboardSearching";

const Dashboard: React.FC = () => {
  const mode = useAppSelector((state) => state.dashboard.mode);

  return (
    <>
      {mode === DashbaordMode.Welcome && <DashboardWelcome />}
      {mode === DashbaordMode.Denied && <DashboardNoAccess />}
      {mode === DashbaordMode.Insert && <DashboardInsert />}
      {mode === DashbaordMode.Searching && <DashboardSearching />}
    </>
  );
};

export default Dashboard;
