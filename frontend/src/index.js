import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TransactionProvider } from './context/TransactionContext';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

ReactDOM.render(
  <Provider store={store}>
    <TransactionProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode> 
    </TransactionProvider> 
  </Provider>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
