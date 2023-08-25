import React from "react";
import { Container, ErrorMessage, Title, Wrapper } from "./Input.styles";

interface Props {
  value: string | number | undefined;
  name: string;
  id?: string;
  title?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange: () => void;
}

const Input: React.FC<Props> = ({
  value,
  name,
  id,
  title,
  placeholder,
  error,
  disabled = false,
  onChange,
}) => {
  return (
    <Wrapper>
      {title && <Title htmlFor={name}>{title}</Title>}
      <Container
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        err={error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Input;
