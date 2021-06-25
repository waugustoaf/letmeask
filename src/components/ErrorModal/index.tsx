import Modal from 'react-modal';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface ErrorModalProps {
  message: string;
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  message,
  isModalVisible,
  setIsModalVisible,
}) => {
  const theme = useTheme();

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

  return (
    <Modal
      isOpen={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      style={modalStyle}
    >
      <Container>
        <div className='button' title='Fechar'>
          <button
            type='button'
            aria-label='Fechar modal de erro'
            onClick={() => setIsModalVisible(false)}
          >
            <svg
              width='36'
              height='36'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M29.66 18.3398L18.34 29.6598'
                stroke='#A8A8B3'
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M29.66 29.6598L18.34 18.3398'
                stroke='#A8A8B3'
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z'
                stroke='#A8A8B3'
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
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
