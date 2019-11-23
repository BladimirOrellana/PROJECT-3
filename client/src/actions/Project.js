import { GET_QUOTE_P, GET_QUOTE_SUCCESS } from "constants/ActionTypes";

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
