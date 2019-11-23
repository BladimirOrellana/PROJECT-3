import {
  GET_QUOTE_P,
  GET_QUOTE_SUCCESS,
  ACCEPT_QUOTE_P
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
