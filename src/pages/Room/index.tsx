import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/auth';
import { database } from '../../services/firebase';
import { toastOptions } from '../../utils/toastOptions';
import { Container } from './styles';

interface Question {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
}

type FirebaseQuestions = Record<string, Omit<Question, 'id'>>;

interface RoomParams {
  id: string;
}

export const Room: React.FC = () => {
  const { user, loading } = useAuth();
  const { id: roomId } = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  const isUserEmpty = !user || Object.keys(user).length === 0;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }),
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]);

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') return;

    if (isUserEmpty) {
      throw new Error('You must be logged in!');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    toast.success('Pergunta enviada com sucesso!', toastOptions);
    setNewQuestion('');
  };

  return (
    <Container>
      <header>
        <div>
          <img src={logoImg} alt='Letmeask' />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className='room-title'>
          <h1>{title}</h1>
          {questions.length > 0 && (
            <span>{`${questions.length} perguntas`}</span>
          )}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder='O que você quer perguntar?'
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className='form-footer'>
            {loading ? (
              <ReactLoading
                color='#8000ff'
                type='spin'
                height={32}
                width={32}
              />
            ) : isUserEmpty ? (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>
              </span>
            ) : (
              <div>
                <img src={user?.avatar} alt={user?.name} />
                <span>{user?.name}</span>
              </div>
            )}
            {}

            <Button type='submit'>Enviar pergunta</Button>
          </div>
        </form>

        {JSON.stringify(questions)}
      </main>
    </Container>
  );
};
