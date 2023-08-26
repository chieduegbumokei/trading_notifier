import React from "react";
import { Container } from "./index.styles";
import { useAppSelector } from "store/hooks";
import Button from "components/shared/Button/Button";

const DashboardSearching: React.FC = () => {
  const lookupText = useAppSelector((state) => state.dashboard.lookupText);
  return (
    <Container>
      <h3>Currently Searching for:</h3>
      <p>{lookupText}</p>
      <Button text="Stop Searching" />
    </Container>
  );
};

export default DashboardSearching;
