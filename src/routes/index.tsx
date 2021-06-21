import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { GlobalStyle } from '../styles/global';
import { CustomThemeProvider } from '../styles/theme';
import '../services/firebase';

export const Routes: React.FC = () => {
  return (
    <CustomThemeProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      <GlobalStyle />
    </CustomThemeProvider>
  );
};
