import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './App.css';
import {store} from './store/store'
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
