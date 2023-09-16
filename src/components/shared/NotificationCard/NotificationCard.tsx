import React from "react";
import {
  Container,
  Content,
  DateContainer,
  SendMessageLink,
  Username,
} from "./NotificationCard.styles";
import { fromNow } from "utils/time";
import { openLink } from "ipc/ipcMessages";

interface Props {
  username: string;
  timestamp: string;
  content: string;
  messageLink: string;
}

const NotificationCard: React.FC<Props> = ({
  username,
  timestamp,
  content,
  messageLink,
}) => {
  const time = fromNow(new Date(timestamp));

  const handleClick = () => openLink(messageLink);

  return (
    <Container>
      <Username>{username}</Username>
      <Content>{content}</Content>
      <DateContainer>{time}</DateContainer>
      <SendMessageLink onClick={handleClick}>Open Chat</SendMessageLink>
    </Container>
  );
};

export default NotificationCard;
