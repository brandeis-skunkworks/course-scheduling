const addCoursesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CHOICE':
            return {
                ...state, 
                [action.payload.id] : action.payload 
            };
        case 'REMOVE_CHOICE':
            let res = Object.assign({}, state);
            delete res[action.payload]
            return res;
        default:
            return state;
    }
}

export default addCoursesReducer;