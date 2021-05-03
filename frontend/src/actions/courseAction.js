import * as actionTypes from './actionTypes';

export const addCourse = (course) => {
    return {
        type : actionTypes.ADD_NEW_COURSE,
        course: course
    }
}

export const deleteCourse = (id) => {
    return {
        type: actionTypes.REMOVE_COURSE,
        id: id
    }
}

export const askConfirmation = (body, accept, cancel) => ({
    type: actionTypes.SHOW_CONFIRM_MODAL,
    payload: {body, accept,}
});