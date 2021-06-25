import { createGlobalStyle } from 'styled-components';

interface GlobalProps {
  isDarkTheme: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.isDarkTheme ? '#575757' : '#f8f8f8'};
    color: ${props => props.isDarkTheme ? '#f8f8f8' : '#29292E'};
    position: relative;
  }
  
  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
