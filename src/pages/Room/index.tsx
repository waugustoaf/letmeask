import { Container } from './styles';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useParams } from 'react-router-dom';

interface RoomParams {
  id: string;
}

export const Room: React.FC = () => {
  const params = useParams<RoomParams>();

  return (
    <Container>
      <header>
        <div>
          <img src={logoImg} alt='Letmeask' />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className='room-title'>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder='O que você quer perguntar?' />
          <div className='form-footer'>
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>
            </span>
            <Button type='submit'>Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </Container>
  );
};
