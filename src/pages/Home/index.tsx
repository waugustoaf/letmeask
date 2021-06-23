import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import enterImg from '../../assets/images/enter.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { database } from '../../services/firebase';
import { Container, Content, CreateRoom } from './styles';

export const Home: React.FC = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = async () => {
    if (!user || Object.keys(user).length === 0) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists');
      setRoomCode('');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  };

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt='Perguntas e respostas' />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <Content>
          <img src={logoImg} alt='Letmeask' />
          <CreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt='Logo do Google' />
            Crie sua sala com o Google
          </CreateRoom>
          <div>ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type='text'
              placeholder='Digite o código da sala'
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button>
              <img src={enterImg} alt='Entrar' />
              Entrar na sala
            </Button>
          </form>
        </Content>
      </main>
    </Container>
  );
};
