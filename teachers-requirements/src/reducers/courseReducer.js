import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
        case actionTypes.ADD_NEW_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case actionTypes.REMOVE_COURSE:
            return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }
};