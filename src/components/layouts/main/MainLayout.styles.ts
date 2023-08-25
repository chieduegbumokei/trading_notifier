import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.main`
  position: relative;
  padding-top: 2.813rem;
  padding-left: calc(21.25rem + 1rem);
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 21.25rem;
  background-color: ${(props) => props.theme.colors.primaryBg};
  box-shadow: 0px 3.5739684104919434px 40.20714569091797px 0px
    rgba(0, 0, 0, 0.08);
  padding: 2.092em 1.569em;
`;

export const Header = styled.header`
  font-size: 24.062px;
  font-weight: 600;
  letter-spacing: 0.12px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 3.125em;
`;

export const Content = styled.section`
  width: calc(100vw - 21.25rem - 1rem);
  height: calc(100vh - 2.813rem);
`;

export const SidebarItems = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type SidebarItemStyle = {
  active: boolean;
};

export const SidebarItem = styled(Link)<SidebarItemStyle>`
  cursor: pointer;
  height: 3.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.75rem 0 1rem;
  color: ${(props) =>
    props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  font-size: 16.738px;
  font-weight: ${(props) => (props.active ? 600 : 400)};
  letter-spacing: 0.167px;
  gap: 1rem;
  text-decoration: none;
  border-radius: 4.185px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.accentBg : "transparent"};
  transition: all 0.25s ease;

  &:hover {
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.accentBg};

    & > div {
      background-color: ${(props) => props.theme.colors.primaryBg};
    }
  }
`;

type SidebarItemCounterStyle = {
  active: boolean;
};

export const SidebarItemCounter = styled.div<SidebarItemCounterStyle>`
  border-radius: 4.185px;
  display: flex;
  width: 25.108px;
  height: 25.108px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primaryBg : props.theme.colors.accentBg};
  margin-left: auto;
`;
