import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './shared/styles/index.scss';
import { Bootstrap } from './app/providers/Bootstrap';
import { StoreProvider } from './app/providers/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Bootstrap>
        <App />
      </Bootstrap>
    </StoreProvider>
  </React.StrictMode>
);
