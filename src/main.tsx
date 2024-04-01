import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes/themes';
import { GlobalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
