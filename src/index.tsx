import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Toaster position='top-right' />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
