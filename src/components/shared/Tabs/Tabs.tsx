import React from "react";
import { Container, Tab } from "./Tabs.styles";

interface Props {
  tabs: string[];
  currentTab: number;
  onChange: (pointer: number) => void;
}

const Tabs: React.FC<Props> = ({ tabs, currentTab, onChange }) => {
  return (
    <Container>
      {tabs.map((tab, i) => (
        <Tab key={tab} active={currentTab === i} onClick={() => onChange(i)}>
          {tab}
        </Tab>
      ))}
    </Container>
  );
};

export default Tabs;
