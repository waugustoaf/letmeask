import { Container, UserInfo } from './style';

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export const Question: React.FC<QuestionProps> = ({
  author,
  content,
  children,
  isAnswered = false,
  isHighlighted = false,
}) => {
  return (
    <Container isAnswered={isAnswered} isHighlighted={isHighlighted && !isAnswered}>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div className='buttons'>{children}</div>
      </footer>
    </Container>
  );
};
