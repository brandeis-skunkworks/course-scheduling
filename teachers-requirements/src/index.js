import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import "semantic-ui-css/semantic.css"
import $ from 'jquery';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')   
);

serviceWorker.unregister();
