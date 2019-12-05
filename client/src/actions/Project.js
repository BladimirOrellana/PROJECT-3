import {
  GET_QUOTE_P,
  GET_QUOTE_SUCCESS,
  ACCEPT_QUOTE_P,
  EMPTYING_REDUCER_P,
  SELECTING_CLIENT_P,
  UPDATE_PROJECT_P
} from "constants/ActionTypes";

export const getQuoteP = payload => {
  return {
    type: GET_QUOTE_P,
    payload: payload
  };
};
export const getQuoteSuccess = payload => {
  return {
    type: GET_QUOTE_SUCCESS,
    payload: payload
  };
};
export const acceptQuoteP = payload => {
  return {
    type: ACCEPT_QUOTE_P,
    payload: payload
  };
};
export const emptyingReducerP = () => {
  return {
    type: EMPTYING_REDUCER_P
  };
};
export const selectingClientP = payload => {
  return {
    type: SELECTING_CLIENT_P,
    payload: payload
  };
};
export const updateProjectP = payload => {
  
  return {
    type: UPDATE_PROJECT_P,
    payload: payload
  };
};
