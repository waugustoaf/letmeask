import { Container } from './styles';
import { useTheme } from '../../hooks/theme';
import sunImg from '../../assets/images/sun.svg';
import moonImg from '../../assets/images/moon.svg';

export const ChangeTheme: React.FC = () => {
  const { theme, toggleThemeProps } = useTheme();

  const handleChangeTheme = () => {
    toggleThemeProps();
  };

  return (
    <Container title='Mudar tema' onClick={handleChangeTheme}>
      <img src={theme === 'dark' ? sunImg : moonImg} alt='Mudar tema' />
    </Container>
  );
};
