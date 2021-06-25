import { StyledTheme } from '../dtos/styled';

export const toastOptions = (theme: StyledTheme) => {
  return {
    style: {
      color: theme.colors.primaryDark,
    },
    iconTheme: {
      primary: theme.colors.themeTwo,
      secondary: '#fff',
    },
  };
};
