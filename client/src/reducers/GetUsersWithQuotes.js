import { GET_USERS_WITH_QUOTES_ACTION_RECEIVED , GET_USER_WITH_QUOTE_ACTION_RECEIVED} from "constants/ActionTypes";

const INIT_STATE = [];
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS_WITH_QUOTES_ACTION_RECEIVED: 
      return {
        ...state,
        data: action.payload
      };
      case GET_USER_WITH_QUOTE_ACTION_RECEIVED: 
      
      return {
        ...state,
        projectData: action.payload
      };
     
    

    default:
      return state;
  }
};
