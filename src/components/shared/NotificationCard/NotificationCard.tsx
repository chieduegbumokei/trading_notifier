import React from "react";
import {
  Container,
  Content,
  DateContainer,
  SendMessageLink,
  Username,
} from "./NotificationCard.styles";
import { Notification } from "interfaces/";
import { formatTimeTo12Hour } from "utils/time";

type Props = Notification;

const NotificationCard: React.FC<Props> = ({
  username,
  timestamp,
  content,
  messageLink,
}) => {
  const time = formatTimeTo12Hour(new Date(timestamp));
  return (
    <Container>
      <Username>{username}</Username>
      <Content>{content}</Content>
      <SendMessageLink to={messageLink}>Send Message</SendMessageLink>
      <DateContainer>{time}</DateContainer>
    </Container>
  );
};

export default NotificationCard;
