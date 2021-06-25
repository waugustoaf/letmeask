import { Container } from './styles';
import copyImg from '../../assets/images/copy.svg';
import { toast } from 'react-hot-toast';
import { toastOptions } from '../../utils/toastOptions';

interface RoomCodeProps {
  code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success('Código copiado!', toastOptions);
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
