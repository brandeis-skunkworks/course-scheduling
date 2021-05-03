const preferenceReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PREFERENCE':
            return {
                ...state, 
                [action.payload.block.id] : action.payload 
            };
        case 'DELETE_PREFERENCE':
            let res = Object.assign({}, state);
            delete res[action.payload]
            return res;
        default: 
            return state;
    }
}

export default preferenceReducer;