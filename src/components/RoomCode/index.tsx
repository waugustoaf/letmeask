import { Container } from './styles';
import copyImg from '../../assets/images/copy.svg';

interface RoomCodeProps {
  code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
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
