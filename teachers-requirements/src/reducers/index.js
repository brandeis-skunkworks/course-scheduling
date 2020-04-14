import {combineReducers} from 'redux';
import courses from './courseReducer'

const allReducers = combineReducers({
    courses: courses
});

export default allReducers;