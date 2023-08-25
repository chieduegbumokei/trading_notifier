import { styled } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Title = styled.label`
  color: #6e7191;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #f5222d;
`;

type ContainerStyle = {
  err?: string;
};

export const Container = styled.input<ContainerStyle>`
  height: 3.125rem;
  width: 28.063rem;
  padding: 0 1.313rem;
  border-radius: 5px;
  background: #f9f9f9;
  border: 1px solid ${(props) => (props.err ? "#F5222D" : "#e6e6e6")};
  font-size: 14px;
  color: #737373;
  margin-bottom: 0.25rem;
  transition: all 0.25s ease;

  &::placeholder {
    color: #b9b9c3;
  }

  &:hover,
  &:focus,
  &:focus-visible,
  &:focus-within {
    border-color: ${(props) => props.theme.colors.secondaryBg};
    outline: ${(props) => props.theme.colors.secondaryBg};
  }

  &:disabled {
    background-color: #e8e8e8;
    font-weight: 500;
  }
`;
