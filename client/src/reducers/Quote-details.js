import { GET_QUOTE_DETAILS_FROM_DATABASE, GET_QUOTE_DETAILS_FROM_DATABASE_RECEIVED } from "constants/ActionTypes";

const INIT_STATE = {};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE_DETAILS_FROM_DATABASE_RECEIVED: 
      return {
        ...state,
        data: action.quoteDetails
      };
    

    default:
      return state;
  }
};
