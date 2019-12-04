import { LOAD_USERS_SUCCESS } from "constants/ActionTypes";

const INIT_STATE = {
  selected: "Client",
  users: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload.users,
        selected: action.payload.selected ? action.payload.selected : "Client"
      };
    }

    default:
      return state;
  }
};
