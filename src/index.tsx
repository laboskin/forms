import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { GlobalStyle } from './global_style';
import { AuthProvider } from './helpers';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
        <GlobalStyle />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
