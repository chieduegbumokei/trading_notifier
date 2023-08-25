import { styled } from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => `1px solid ${props.theme.colors.secondaryBg}`};
  border-radius: 5px;
  background-color: transparent;
  padding: 0 2.5rem;
  height: 3.625rem;
  width: min-content;
  color: ${(props) => props.theme.colors.secondaryBg};
  font-weight: 600;
  letter-spacing: 0.2px;
  transition: all 0.25s ease-in-out;

  &:disabled {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryBg};
    color: ${(props) => props.theme.colors.primaryBg};
  }
`;
