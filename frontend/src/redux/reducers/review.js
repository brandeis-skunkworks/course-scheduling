const reviewReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_REVIEW':
            return !state;
        default: 
            return state;
    }
}

export default reviewReducer;