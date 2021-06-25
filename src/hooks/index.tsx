import { AuthProvider } from './auth';
import { RoomProvider } from './room';
import { ThemeProvider } from './theme';

export const HooksProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RoomProvider>{children}</RoomProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
