import { AuthProvider } from './auth';
import { RoomProvider } from './room';

export const HooksProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <RoomProvider>{children}</RoomProvider>
    </AuthProvider>
  );
};
