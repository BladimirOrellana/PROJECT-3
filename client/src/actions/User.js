import {
  LOAD_USERS_P,
  LOAD_USERS_SUCCESS,
  ADD_USER_P,
  EDIT_USER_P,
  REMOVE_USER_P,
  CREATE_ACTIVATE_USER,
  ACTIVATE_USER_OR_CHANGE_PASSWORD
} from "constants/ActionTypes";

export const loadUsersP = payload => {
  return {
    type: LOAD_USERS_P,
    payload: payload
  };
};
export const loadUsersSuccess = payload => {
  return {
    type: LOAD_USERS_SUCCESS,
    payload: payload
  };
};
export const addUserP = payload => {
  return {
    type: ADD_USER_P,
    payload: payload
  };
};
export const editUserP = payload => {
  return {
    type: EDIT_USER_P,
    payload: payload
  };
};
export const removeUserP = payload => {
  return {
    type: REMOVE_USER_P,
    payload: payload
  };
};
export const createActivateUser = payload => {
  return {
    type: CREATE_ACTIVATE_USER,
    payload: payload
  };
};
export const activateUserOrChangePassword = payload => {
  return {
    type: ACTIVATE_USER_OR_CHANGE_PASSWORD,
    payload: payload
  };
};
