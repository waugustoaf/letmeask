import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #f8f8f8;
    color: #29292e
  }
  
  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
