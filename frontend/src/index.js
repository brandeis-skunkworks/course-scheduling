import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store1 = configureStore();

ReactDOM.render((
    <Provider store={store1}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
    ), document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();