import {  GET_ALL_QUOTES_FROM_DATABASE_RECEIVED,UPDATE_STATE_ACTION_RECEIVED} from "constants/ActionTypes";

const INIT_STATE = {};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_QUOTES_FROM_DATABASE_RECEIVED: 
      return {
        ...state,
        data: action.quotes
      };
      case UPDATE_STATE_ACTION_RECEIVED: 
      
      return {
        ...state,
        stateValue: action.upDateState
      };
    

    default:
      return state;
  }
};
