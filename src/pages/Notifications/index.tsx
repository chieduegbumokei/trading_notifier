import React from "react";
import { Container } from "./index.styles";
import { useAppSelector } from "store/hooks";
import NotificationCard from "components/shared/NotificationCard/NotificationCard";

const Notifications: React.FC = () => {
  const notifications = useAppSelector(
    (state) => state.dashboard.notifications
  );

  return (
    <Container>
      {notifications.map((notification, i) => (
        <NotificationCard
          key={i}
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
