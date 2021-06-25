import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/theme';

export const CustomThemeProvider: React.FC = ({ children }) => {
  const { theme: hookTheme } = useTheme();

  const lightTheme = {
    colors: {
      themeOne: '#29292E',
      shadow: '#050206',
      themeTwo: '#835AFD',
      danger: '#E73F5D',

      primaryDark: '#737380',
      primaryMedium: '#A8A8B3',
      primaryLight: '#DBDCDD',

      secondaryDark: '#E559F9',
      secondaryLight: '#D67EE2',

      background: '#f8f8f8',
      details: '#fefefe',
    },
    hovers: {
      themeTwo: '#6F4BD8',
      danger: '#D73754',
      primaryMedium: '#7E7E86',
      primaryLight: '#CECECE',
    },
  };

  const darkTheme = {
    colors: {
      themeOne: '#ffffff',
      shadow: '#050206',
      themeTwo: '#000000',
      danger: '#E73F5D',

      primaryDark: '#737380',
      primaryMedium: '#A8A8B3',
      primaryLight: '#DBDCDD',

      secondaryDark: '#E559F9',
      secondaryLight: '#D67EE2',

      background: '#575757',
      details: '#111111',

      white: '#fff',
    },
    hovers: {
      themeTwo: '#6F4BD8',
      danger: '#D73754',
      primaryMedium: '#7E7E86',
      primaryLight: '#CECECE',
    },
  };

  return (
    <ThemeProvider theme={hookTheme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
