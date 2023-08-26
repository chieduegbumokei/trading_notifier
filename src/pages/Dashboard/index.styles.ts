import { styled } from "styled-components";

export const Container = styled.section`
  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.1px;
    margin-bottom: 1.5em;
  }

  p {
    color: ${(props) => props.theme.colors.accent};
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.2px;
    max-width: 63ch;
  }
`;

export const InsertContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
