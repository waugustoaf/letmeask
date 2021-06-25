import { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './auth';

interface Question {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
  likes: Record<
    string,
    {
      authorId: string;
    }
  >;
  likeCount: number;
  likeId: string | undefined;
}

interface RoomProps {
  questions: Question[];
  title: string;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

type FirebaseQuestions = Record<string, Omit<Question, 'id'>>;

const RoomContext = createContext({} as RoomProps);

const RoomProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const [roomId, setRoomId] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

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
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(
            ([key, like]) => like.authorId === user?.id,
          )?.[0],
          likes: value.likes || {},
        }),
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
      setLoading(false);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return (
    <RoomContext.Provider value={{ questions, title, setRoomId, loading }}>
      {children}
    </RoomContext.Provider>
  );
};

const useRoom = () => {
  const roomContext = useContext(RoomContext);

  if (!roomContext) {
    throw new Error('useRoom must be used within RoomProvider');
  }

  return roomContext;
};

export { useRoom, RoomProvider };
