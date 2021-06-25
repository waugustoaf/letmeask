import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

interface ItemProps {
  theme: 'dark' | 'light';
}

interface ThemeProps {
  theme: 'dark' | 'light';
  toggleThemeProps: () => void;
}

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider: React.FC = ({ children }) => {
  const getMatchMedia = () => window.matchMedia('(prefers-color-scheme: dark)');
  const [themeProps, setThemeProps] = useState<ItemProps>(
    getMatchMedia().matches ? { theme: 'dark' } : { theme: 'light' },
  );

  const toggleThemeProps = () => {
    setThemeProps(previousValue =>
      previousValue.theme === 'dark' ? { theme: 'light' } : { theme: 'dark' },
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themeProps.theme, toggleThemeProps }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return themeContext;
};

export { ThemeProvider, useTheme };
