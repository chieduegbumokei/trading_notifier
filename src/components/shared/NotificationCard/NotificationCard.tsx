import React from "react";
import {
  Container,
  Content,
  DateContainer,
  Username,
} from "./NotificationCard.styles";
import { formatTimeTo12Hour } from "utils/time";

interface Props {
  username: string;
  timestamp: string;
  content: string;
}

const NotificationCard: React.FC<Props> = ({
  username,
  timestamp,
  content,
}) => {
  const time = formatTimeTo12Hour(new Date(timestamp));

  return (
    <Container>
      <Username>{username}</Username>
      <Content>{content}</Content>
      <DateContainer>{time}</DateContainer>
    </Container>
  );
};

export default NotificationCard;
