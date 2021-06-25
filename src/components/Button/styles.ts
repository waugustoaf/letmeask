import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  fontColor?: string;
  borderColor?: string;
}

export const Container = styled.button<ButtonProps>`
  background: ${props =>
    props.color || !!props.borderColor ? '#fff' : props.theme.colors.themeTwo};
  color: ${props =>
    props.fontColor || !!props.borderColor
      ? props.theme.colors.themeTwo
      : '#fff'};
  border: ${props =>
    !!props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
  outline: none;

  height: 50px;
  border-radius: 8px;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
