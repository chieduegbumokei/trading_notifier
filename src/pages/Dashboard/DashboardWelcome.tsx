import React from "react";
import { Container } from "./index.styles";

const DashboardWelcome: React.FC = () => {
  return (
    <Container>
      <h3>Welcome to our application!</h3>
      <p>
        Before you begin exploring the full potential of our application, we
        kindly ask you to set up your preferences. By customizing your settings,
        you can tailor the app to suit your unique needs and enhance your
        experience.{" "}
      </p>
      <p>
        Please fill the following:
        <br />
        {"Settings -> Authorization code"}
        <br />
        {"Settings -> Channel id"}
      </p>
      <p>
        This will ensure that you get the most out of every feature and
        functionality we offer.
      </p>
      <p>
        To get started, please take a moment to fill in your preferred settings.
        This will help us provide you with accurate and relevant information,
        and make your time with the application more efficient and enjoyable.
      </p>
      <p>
        Thank you for choosing our application. We're excited to have you on
        board and look forward to serving you with a personalized and seamless
        experience!
      </p>
    </Container>
  );
};

export default DashboardWelcome;
