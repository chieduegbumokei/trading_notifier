import { styled } from "styled-components";

export const Container = styled.section`
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primaryBg};
  box-shadow: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);
  width: 26.938rem;
  height: 7.375rem;
  padding: 1rem 1.5rem;
  position: relative;
  font-family: Source Code Pro;
`;

export const Username = styled.h5`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  font-weight: 500;
  width: 292px;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Content = styled.p`
  color: ${(props) => props.theme.colors.accent};
  font-size: 14px;
  font-weight: 400;
  width: 292px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const DateContainer = styled.span`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  color: ${(props) => props.theme.colors.accent};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;

export const SendMessageLink = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #0c7fda;
  text-decoration: none;
  height: 1.938rem;
  width: max-content;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;
