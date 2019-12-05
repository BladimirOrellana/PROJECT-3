import { SEND_EMAIL_ACTION, SEND_EMAIL_ACTION_RECEIVED } from "constants/ActionTypes";

const INIT_STATE = [];
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SEND_EMAIL_ACTION: 
      return {
        ...state,
        payload: action.payload
      };
      case SEND_EMAIL_ACTION_RECEIVED: 
      return {
        ...state,
        payload: action.payload
      };
    

    default:
      return state;
  }
};