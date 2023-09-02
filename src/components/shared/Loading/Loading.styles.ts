import { styled } from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Loader = styled.span`
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;

  &:before,
  &:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  &:before {
    animation: ball1 1s infinite;
    background-color: ${(props) => props.theme.colors.accentBg};
    box-shadow: 30px 0 0 ${(props) => props.theme.colors.secondary};
    margin-bottom: 10px;
  }
  &:after {
    animation: ball2 1s infinite;
    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 30px 0 0 ${(props) => props.theme.colors.accentBg};
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(0.8);
    }
    50% {
      transform: rotate(360deg) scale(1.2);
    }
    100% {
      transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 ${(props) => props.theme.colors.secondary};
    }
    50% {
      box-shadow: 0 0 0 ${(props) => props.theme.colors.secondary};
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${(props) => props.theme.colors.secondary};
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 ${(props) => props.theme.colors.accentBg};
    }
    50% {
      box-shadow: 0 0 0 ${(props) => props.theme.colors.accentBg};
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${(props) => props.theme.colors.accentBg};
      margin-top: 0;
    }
  }
`;
