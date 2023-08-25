import { Container } from "./Button.styles";

interface Props {
  id?: string;
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ id, disabled = false, text, type, onClick }: Props) => {
  return (
    <Container id={id} disabled={disabled} onClick={onClick} type={type}>
      {text}
    </Container>
  );
};

export default Button;
