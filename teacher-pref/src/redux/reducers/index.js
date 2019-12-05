import {combineReducers} from 'redux';
import chosenCourseReducer from './chosenCourse';
import preferenceReducer from './preference';
import reviewReducer from './review';

const allReducers = combineReducers({
    chosen: chosenCourseReducer,
    value: preferenceReducer,
    review: reviewReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_ALL') {
        state = undefined;
    }    

    return allReducers(state, action);
}

export default rootReducer;