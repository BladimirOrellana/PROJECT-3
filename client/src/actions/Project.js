import {
  SIDES_NUMBER_P,
  GATES_NUMBER_P,
  GET_QUOTE_P,
  GET_QUOTE_SUCCESS
} from "constants/ActionTypes";

export const sidesNumberP = payload => {
  return {
    type: SIDES_NUMBER_P,
    payload: payload
  };
};
export const gatesNumberP = payload => {
  return {
    type: GATES_NUMBER_P,
    payload: payload
  };
};
export const getQuoteP = payload => {
  return {
    type: GET_QUOTE_P,
    payload: payload
  };
};
export const getQuoteSuccess = () => {
  return {
    type: GET_QUOTE_SUCCESS
  };
};
