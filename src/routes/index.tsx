import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';
import { GlobalStyle } from '../styles/global';
import { CustomThemeProvider } from '../styles/theme';
import { HooksProvider } from '../hooks';
import '../services/firebase';

export const Routes: React.FC = () => {
  return (
    <CustomThemeProvider>
      <HooksProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/rooms/new' component={NewRoom} />
            <Route path='/rooms/:id' component={Room} />

            <Route path='/admin/rooms/:id' component={AdminRoom} />
          </Switch>
        </Router>
      </HooksProvider>
      <GlobalStyle />
    </CustomThemeProvider>
  );
};
