import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { database } from '../../services/firebase';
import { Container, Content } from './styles';

export const NewRoom: React.FC = () => {
  const { user } = useAuth();
  const [roomName, setRoomName] = useState('');
  const history = useHistory();

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomName.trim() === '') return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user ? user.id : '',
    });

    history.push(`/rooms/${firebaseRoom.key}`);
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
          <h1>{user ? user.name : ''}</h1>
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type='text'
              placeholder='Nome da sala'
              onChange={event => setRoomName(event.target.value)}
              value={roomName}
            />
            <Button>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>
          </p>
        </Content>
      </main>
    </Container>
  );
};
