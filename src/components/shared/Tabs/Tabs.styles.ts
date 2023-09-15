import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
`;

type TabStyle = {
  active: boolean;
};

export const Tab = styled.button<TabStyle>`
  cursor: pointer;
  border: none;
  padding: 0 1rem 0.5rem;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#0c7fda" : props.theme.colors.accent)};
  background-color: transparent;
  color: ${(props) => (props.active ? "#0c7fda" : props.theme.colors.accent)};
  transition: border-bottom color 0.25s ease;

  &:hover {
    color: #0c7fda;
    border-bottom-color: #0c7fda;
  }
`;
