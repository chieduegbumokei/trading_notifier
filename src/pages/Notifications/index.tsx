import React, { useEffect } from "react";
import { Container } from "./index.styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getNotifications } from "store/apis/notifications";
import NotificationCard from "components/shared/NotificationCard/NotificationCard";

const Notifications: React.FC = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(
    (state) => state.dashboard.notifications
  );

  useEffect(() => {
    dispatch(getNotifications());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Notifications:", notifications);

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
