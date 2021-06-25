import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';
import { Toaster } from 'react-hot-toast';
import { HooksProvider } from './hooks';

ReactDOM.render(
  <React.StrictMode>
    <Toaster position='top-right' />
    <HooksProvider>
      <Routes />
    </HooksProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
