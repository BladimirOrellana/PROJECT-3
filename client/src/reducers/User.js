import { LOAD_USERS_SUCCESS } from "constants/ActionTypes";

const INIT_STATE = {
  selected: "Client",
  users: [],
  name: "",
  phone: "",
  email: "",
  role: "",
  _id: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload.users,
        selected: action.payload.selected
      };
    }

    default:
      return state;
  }
};
