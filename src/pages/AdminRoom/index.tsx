import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import deleteImg from '../../assets/images/delete.svg';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { Load } from '../../components/Load';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useRoom } from '../../hooks/room';
import { database } from '../../services/firebase';
import { Container, QuestionList, ModalDelete } from './styles';
import Modal from 'react-modal';
import closeImg from '../../assets/images/close.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import { toast } from 'react-hot-toast';
import { toastOptions } from '../../utils/toastOptions';
import { useTheme } from 'styled-components';
import { StyledTheme } from '../../dtos/styled';
import { ChangeTheme } from '../../components/ChangeTheme';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

interface RoomParams {
  id: string;
}

export const AdminRoom: React.FC = () => {
  const { id: roomId } = useParams<RoomParams>();
  const { questions, title, setRoomId, loading } = useRoom();
  const { user, loading: loadingUser } = useAuth();
  const [currentModalQuestionId, setCurrentModalQuestionId] = useState<
    string | null
  >(null);

  const theme = useTheme() as StyledTheme;

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const authorId = await (
        await database.ref(`/rooms/${roomId}`).get()
      ).val().authorId;
      if (authorId !== user?.id && !loadingUser) {
        history.push(`/rooms/${roomId}`);
      }
    })();
  }, [history, roomId, user?.id, loadingUser]);

  setRoomId(roomId);

  const modalStyle = {
    content: {
      height: 360,
      width: '90%',
      maxWidth: 590,
      borderRadius: '8px',
      margin: 'auto auto',
      // @ts-ignore
      backgroundColor: theme.colors.details,
    },
    overlay: {
      background: 'rgba(0,0,0,0.7)',
    },
  };

  const handleCloseModal = () => {
    setCurrentModalQuestionId(null);
  };

  const handleDeleteQuestion = async () => {
    await database
      .ref(`rooms/${roomId}/questions/${currentModalQuestionId}`)
      .remove();
    setCurrentModalQuestionId(null);
    toast.error('Pergunta deletada!', {
      ...toastOptions(theme),
      iconTheme: { primary: '#E73F5D', secondary: '#fff' },
    });
  };

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push('/');
  };

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    const currentQuestion = questions.find(item => item.id === questionId);

    await database
      .ref(`rooms/${roomId}/questions/${questionId}`)
      .update({ isAnswered: currentQuestion?.isAnswered ? false : true });
  };

  const handleHighlightQuestion = async (questionId: string) => {
    const currentQuestion = questions.find(item => item.id === questionId);

    await database
      .ref(`rooms/${roomId}/questions/${questionId}`)
      .update({ isHighlighted: currentQuestion?.isHighlighted ? false : true });
  };

  return (
    <Container>
      <header>
        <div>
          <Link to='/' title='Letmeask'>
            <img src={logoImg} alt='Letmeask' />
          </Link>
          <div>
            <RoomCode code={roomId} />
            <Button borderColor={theme.colors.themeTwo} onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      {loading ? (
        <Load />
      ) : (
        <main>
          <div className='room-title'>
            <h1>{title}</h1>
            {questions.length > 0 && (
              <span>{`${questions.length} perguntas`}</span>
            )}
          </div>

          <QuestionList>
            {questions.map(question => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type='button'
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt='Marcar pergunta como respondida'
                      />
                    </button>
                    <button
                      type='button'
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt='Dar destaque à pergunta' />
                    </button>
                  </>
                )}
                <button
                  type='button'
                  onClick={() => setCurrentModalQuestionId(question.id)}
                >
                  <img src={deleteImg} alt='Excluir pergunta' />
                </button>
              </Question>
            ))}
          </QuestionList>
        </main>
      )}
      <Modal
        isOpen={!!currentModalQuestionId}
        onRequestClose={handleCloseModal}
        style={modalStyle}
      >
        <ModalDelete>
          <img src={closeImg} alt='Deletar pergunta' />
          <h2>Encerrar sala</h2>
          <p>Tem certeza que deseja encerrar esta sala?</p>
          <div>
            <button
              type='button'
              aria-label='Cancelar remoção da pergunta'
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
            <button
              type='button'
              className='delete-button'
              aria-label='Deletar pergunta'
              onClick={handleDeleteQuestion}
            >
              Sim, deletar
            </button>
          </div>
        </ModalDelete>
      </Modal>
      <ChangeTheme />
    </Container>
  );
};
