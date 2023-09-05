import React, { useLayoutEffect } from "react";
import { Container } from "./index.styles";
import { useAppSelector } from "store/hooks";
import NotificationCard from "components/shared/NotificationCard/NotificationCard";
import { setWindowTitle } from "ipc/ipcMessages";

const Notifications: React.FC = () => {
  const notifications = useAppSelector(
    (state) => state.dashboard.notifications
  );

  useLayoutEffect(() => {
    setWindowTitle("Notification - Trading Notifier");
  }, []);

  return (
    <Container>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          username={notification.username}
          timestamp={notification.timestamp}
          content={notification.content}
        />
      ))}
    </Container>
  );
};

export default Notifications;
