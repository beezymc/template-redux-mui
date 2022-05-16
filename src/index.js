import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AppContainer from './redux/containers/AppContainer.js';
import store from './redux/store/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);