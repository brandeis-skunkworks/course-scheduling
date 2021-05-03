import keyMirror from 'keymirror'

export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const ADD_NEW_COURSE = 'ADD_NEW_COURSE';
export const REMOVE_COURSE = 'REMOVE_COURSE';
export const SHOW_CONFIRM_MODAL = 'SHOW_CONFIRM_MODAL'

const ActionTypes = keyMirror({
    HIDE_MODAL: null,
    SHOW_MODAL: null,
})

export default ActionTypes;