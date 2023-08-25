import React from "react";
import { Container } from "./MainLayout.styles";
import MainLayoutSidebar from "./MainLayoutSidebar";
import MainLayoutContent from "./MainLayoutContent";

const MainLayout: React.FC = () => {
  return (
    <Container>
      <MainLayoutSidebar />
      <MainLayoutContent />
    </Container>
  );
};

export default MainLayout;
