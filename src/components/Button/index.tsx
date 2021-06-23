import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  fontColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  fontColor,
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};
