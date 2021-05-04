import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';

// Rhosun's
import configureStore from './store/configureStore';
const store1 = configureStore();

// Danny's
// import {createStore} from 'redux';
// import rootReducer from './redux/reducers';
// const store2 = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render((
    <Provider store={store1}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>

    // <Provider store={store}>
    //   <AcademicInfo />
    // </Provider>
    ), document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, 
//     document.getElementById('root')
// );