import { createContext } from 'react';
import { useState, useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { firebase, auth } from '../services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthProps {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext({} as AuthProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user && Object.keys(user).length !== 0) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      } else {
        history.push('/');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history]);

  const signInWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const userContext = useContext(AuthContext);
  if (!userContext) {
    throw new Error('useAuth must be used within UserProvider');
  }

  return userContext;
};

export { AuthProvider, useAuth };
