import Modal from 'react-modal';
import closeImg from '../../assets/images/close.svg';
import { Container } from './styles';

interface ErrorModalProps {
  message: string;
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ message, isModalVisible, setIsModalVisible }) => {
  const modalStyle = {
    content: {
      height: 360,
      width: '90%',
      maxWidth: 590,
      borderRadius: '8px',
      margin: 'auto auto',
    },
    overlay: {
      background: 'rgba(0,0,0,0.7)',
    },
  };

  return (
    <Modal
      isOpen={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      style={modalStyle}
    >
      <Container>
        <div className="button" title="Fechar">
          <button
            type='button'
            aria-label='Fechar modal de erro'
            onClick={() => setIsModalVisible(false)}
          >
            <img src={closeImg} alt='Houve um erro' />
          </button>
        </div>
        <div className='content'>
          <h2>Oops!</h2>
          <p>{message}</p>
        </div>
      </Container>
    </Modal>
  );
};
