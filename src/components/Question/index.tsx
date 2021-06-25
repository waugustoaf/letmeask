import { Container, UserInfo } from './style';

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const Question: React.FC<QuestionProps> = ({ author, content, children }) => {
  return (
    <Container>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>
          {children}
        </div>
      </footer>
    </Container>
  );
};
