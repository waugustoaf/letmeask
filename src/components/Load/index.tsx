import { Container } from './styles';
import Lottie from 'react-lottie';
import animation from '../../assets/animation.json';

export const Load: React.FC = () => {
  return (
    <Container>
      <Lottie
        height={400}
        width={400}
        options={{ animationData: animation, autoplay: true, loop: true }}
      />
    </Container>
  );
};
