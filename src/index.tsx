import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './shared/styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Bootstrap } from './app/providers/Bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bootstrap>
        <App />
      </Bootstrap>
    </Provider>
  </React.StrictMode>
);
