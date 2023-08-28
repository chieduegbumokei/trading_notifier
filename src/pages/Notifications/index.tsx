import React, { useEffect } from "react";
import { Container } from "./index.styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getNotifications } from "store/apis/notifications";

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

  return <Container></Container>;
};

export default Notifications;
