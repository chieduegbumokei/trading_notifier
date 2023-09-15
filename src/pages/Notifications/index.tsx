import React, { useLayoutEffect } from "react";
import { Container } from "./index.styles";
import { useAppSelector } from "store/hooks";
import NotificationCard from "components/shared/NotificationCard/NotificationCard";
import { setWindowTitle } from "ipc/ipcMessages";
import { LoadingState } from "objects/";
import Loading from "components/shared/Loading/Loading";

const Notifications: React.FC = () => {
  const notifications = useAppSelector((state) => state.notifications.data);
  const loading = useAppSelector((state) => state.notifications.loading);

  useLayoutEffect(() => {
    setWindowTitle("Notification - Trading Notifier");
  }, []);

  if (loading === LoadingState.Pending) return <Loading />;

  return (
    <Container>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          username={notification.username}
          timestamp={notification.timestamp}
          content={notification.content}
          messageLink={notification.messageLink}
        />
      ))}
    </Container>
  );
};

export default Notifications;
