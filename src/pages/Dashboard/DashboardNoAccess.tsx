import React from "react";
import { Container } from "./index.styles";

const DashboardNoAccess: React.FC = () => {
  return (
    <Container>
      <h3>No Access</h3>
      <p>
        Please make sure your account is part of the channel, and that you
        provided the correct channel id, and auth code.
      </p>
    </Container>
  );
};

export default DashboardNoAccess;
