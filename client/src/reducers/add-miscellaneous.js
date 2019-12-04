import { GET_ALL_ACTIVES_QUOTES_FROM_DATABASE_RECEIVED,ADD_PAYMENT_ACTION_RECEIVED} from "constants/ActionTypes";

const INIT_STATE = {};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ACTIVES_QUOTES_FROM_DATABASE_RECEIVED: 
      return {
        ...state,
        data: action.quoteDetails
      };
      case ADD_PAYMENT_ACTION_RECEIVED: 
      return {
        ...state,
        payment: action.payload
      };
    

    default:
      return state;
  }
};
