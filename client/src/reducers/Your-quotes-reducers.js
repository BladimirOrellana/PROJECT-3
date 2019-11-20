import { GET_ALL_QUOTES_FROM_DATABASE } from "./../constants/ActionTypes";
const INIT_STATE = { data: "init" };
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_QUOTES_FROM_DATABASE: 
      return {
        ...state,
        data: action.payload
      };
    

    default:
      return state;
  }
};
