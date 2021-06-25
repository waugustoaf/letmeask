import { Container } from './styles';
import copyImg from '../../assets/images/copy.svg';
import { toast } from 'react-hot-toast';
import { toastOptions } from '../../utils/toastOptions';
import { useTheme } from 'styled-components';
import { StyledTheme } from '../../dtos/styled';
interface RoomCodeProps {
  code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const theme = useTheme() as StyledTheme;

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success('Código copiado!', toastOptions(theme));
  };

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt='Copiar código da sala' />
      </div>
      <span>Sala {code}</span>
    </Container>
  );
};
