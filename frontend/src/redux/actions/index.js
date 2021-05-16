 export const chosenCourse = (course) => {
    return {
        type: 'CHOOSE',
        payload: course
    };
};

export const removeChosenCourse = () => {
    return {
        type: 'REMOVE'
    };
};

export const addChosenCourse = (course) => {
    return {
        type: 'ADD_CHOICE',
        payload: course
    };
};

export const deleteChosenCourse = (id) => {
    return {
        type: 'REMOVE_CHOICE',
        payload: id
    };
};

export const addPreference = (pref) => {
    return {
        type: 'ADD_PREFERENCE',
        payload: pref
    };
};

export const deletePreference = (id) => {
    return {
        type: 'DELETE_PREFERENCE',
        payload: id
    };
};

export const toggleReview = () => {
    return {
        type: 'TOGGLE_REVIEW'
    }
}

export const resetAll = () => {
    return {
        type: 'RESET_ALL'
    }
}

export const submitPreferences = () => async (dispatch, getState) => {
    const preferences = getState().value;
    console.log(preferences)
}
