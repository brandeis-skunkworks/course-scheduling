import { createStore } from 'redux';
import rootReducer from '../reducers';

// Danny's
// import rootReducer from './redux/reducers';
// const store2 = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}