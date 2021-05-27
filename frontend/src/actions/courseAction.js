import * as actionTypes from "./actionTypes";

export const addCourse = (course) => {
  return {
    type: actionTypes.ADD_NEW_COURSE,
    course: course,
  };
};

export const deleteCourse = (id) => {
  return {
    type: actionTypes.REMOVE_COURSE,
    id: id,
  };
};

export const askConfirmation = (body, accept, cancel) => ({
  type: actionTypes.SHOW_CONFIRM_MODAL,
  payload: { body, accept },
});

export const submitCourseToBackend = () => async (dispatch, getState) => {
  const courses = getState().courses;

  fetch("http://localhost:1337/course", {
    method: "POST",
    body: JSON.stringify(courses[courses.length - 1]),
  });
  //   need to save only the last course
  //   courses.forEach((course) => {
  //   });
};

export const deleteAllCoursesOnBackend = () => async (dispatch, getState) => {
  fetch("http://localhost:1337/course/all", {
    method: "DELETE",
  });
};

export const deleteCourseOnBackend = (name) => async (dispatch, getState) => {
  console.log("the name of the course we want to delete is: " + name);
  fetch("http://localhost:1337/course/" + name, {
    method: "DELETE",
  });
};
