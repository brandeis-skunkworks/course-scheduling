export const chosenCourse = (course) => {
    return {
        type: 'CHOOSE',
        payload: course
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