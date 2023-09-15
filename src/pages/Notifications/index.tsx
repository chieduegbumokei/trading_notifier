import React, { useLayoutEffect, useMemo } from "react";
import { Container, EmptyState } from "./index.styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import NotificationCard from "components/shared/NotificationCard/NotificationCard";
import { setWindowTitle } from "ipc/ipcMessages";
import { LoadingState, NotificationsMode } from "objects/";
import Loading from "components/shared/Loading/Loading";
import { clearRecentData, handleMode } from "store/slices/notificationsSlice";
import Tabs from "components/shared/Tabs/Tabs";

const Notifications: React.FC = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notifications.data);
  const recentNotifications = useAppSelector(
    (state) => state.notifications.recentData
  );
  const loading = useAppSelector((state) => state.notifications.loading);
  const mode = useAppSelector((state) => state.notifications.mode);
  const tabs = [NotificationsMode.Recent, NotificationsMode.All];
  const currentTab = useMemo(
    () => (mode === NotificationsMode.Recent ? 0 : 1),
    [mode]
  );
  const currentNotifications = useMemo(
    () =>
      mode === NotificationsMode.All ? notifications : recentNotifications,
    [notifications, recentNotifications, mode]
  );

  useLayoutEffect(() => {
    setWindowTitle("Notification - Trading Notifier");

    return () => {
      dispatch(clearRecentData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading === LoadingState.Pending) return <Loading />;

  const handleTabChange = (pointer: number) => {
    const tab = tabs[pointer];
    dispatch(handleMode(tab));
    return;
  };

  return (
    <Container>
      <Tabs tabs={tabs} currentTab={currentTab} onChange={handleTabChange} />
      {currentNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          username={notification.username}
          timestamp={notification.timestamp}
          content={notification.content}
          messageLink={notification.messageLink}
        />
      ))}
      {currentNotifications.length === 0 && (
        <EmptyState>No Notifications</EmptyState>
      )}
    </Container>
  );
};

export default Notifications;
