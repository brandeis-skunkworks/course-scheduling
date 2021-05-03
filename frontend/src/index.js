import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// import "semantic-ui-css/semantic.css"
// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AcademicInfo from './AcademicInfo';

const store = configureStore();

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // <Provider store={store}>
    //   <AcademicInfo />
    // </Provider>
    ), document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
