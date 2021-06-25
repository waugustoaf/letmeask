import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  border: none;
  outline: none;
  background: ${props => props.theme.colors.themeTwo};
  font-size: 0;
  padding: 8px;
  border-radius: 50%;
`;
