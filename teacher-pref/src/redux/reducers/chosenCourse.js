const chosenCourseReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHOOSE':
            return action.payload;
        case 'REMOVE':
            return '';
        default: 
            return state;
    }
}

export default chosenCourseReducer;