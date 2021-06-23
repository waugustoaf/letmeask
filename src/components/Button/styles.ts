import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  fontColor?: string;
}

export const Container = styled.button<ButtonProps>`
  background: ${props => props.color || '#835afd'};
  color: ${props => props.fontColor || '#fff'};
  border: none;
  outline: none;

  height: 50px;
  margin-top: 64px;
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
