import React from "react";
import { Container, Loader } from "./Loading.styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <Loader></Loader>
      Loading...
    </Container>
  );
};

export default Loading;
