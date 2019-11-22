import {  GET_ALL_QUOTES_FROM_DATABASE_RECIVED} from "constants/ActionTypes";

const INIT_STATE = {};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_QUOTES_FROM_DATABASE_RECIVED: 
      return {
        ...state,
        data: action.quotes
      };
    

    default:
      return state;
  }
};
