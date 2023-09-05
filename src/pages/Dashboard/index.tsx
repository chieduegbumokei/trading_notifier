import { DashbaordMode } from "objects/";
import React, { useLayoutEffect } from "react";
import { useAppSelector } from "store/hooks";
import DashboardWelcome from "./DashboardWelcome";
import DashboardNoAccess from "./DashboardNoAccess";
import DashboardInsert from "./DashboardInsert";
import DashboardSearching from "./DashboardSearching";
import Loading from "components/shared/Loading/Loading";
import { setWindowTitle } from "ipc/ipcMessages.ts";

const Dashboard: React.FC = () => {
  const mode = useAppSelector((state) => state.dashboard.mode);

  useLayoutEffect(() => {
    setWindowTitle("Dashboard - Trading Notifier");
  }, []);

  return (
    <>
      {mode === DashbaordMode.Welcome && <DashboardWelcome />}
      {mode === DashbaordMode.Denied && <DashboardNoAccess />}
      {mode === DashbaordMode.Insert && <DashboardInsert />}
      {mode === DashbaordMode.Searching && <DashboardSearching />}
      {mode === DashbaordMode.Loading && <Loading />}
    </>
  );
};

export default Dashboard;
