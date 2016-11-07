import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux';
import Store from './store/store'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
