import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#e1e1e1',
  },
};

export const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
