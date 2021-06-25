import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';
import { GlobalStyle } from '../styles/global';
import { CustomThemeProvider } from '../styles/theme';
import '../services/firebase';
import { useTheme } from '../hooks/theme';

export const Routes: React.FC = () => {
  const { theme } = useTheme();

  return (
    <CustomThemeProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/new' component={NewRoom} />
          <Route path='/rooms/:id' component={Room} />

          <Route path='/admin/rooms/:id' component={AdminRoom} />
        </Switch>
      </Router>
      <GlobalStyle isDarkTheme={theme === 'dark'} />
    </CustomThemeProvider>
  );
};
