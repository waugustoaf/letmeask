import { useHistory } from 'react-router-dom';
import enterImg from '../../assets/images/enter.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { Container, Content, CreateRoom } from './styles';

export const Home: React.FC = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user || Object.keys(user).length === 0) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
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
          <form>
            <input type='text' placeholder='Digite o código da sala' />
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
