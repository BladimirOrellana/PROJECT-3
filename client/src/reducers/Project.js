import {
  GATES_NUMBER_P,
  SIDES_NUMBER_P
} from "constants/ActionTypes";
import { GET_QUOTE_SUCCESS } from "constants/ActionTypes";

const INIT_STATE = {
  address: "",
  estimatedPrice: 0,
  estimatedPriceBySide: [],
  fenceSidesInfo: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE_SUCCESS: {
      return {
        address: action.payload.address,
        estimatedPrice: action.payload.estimatedPrice,
        estimatedPriceBySide: action.payload.estimatedPriceBySide,
        fenceSidesInfo: action.payload.fenceSidesInfo
      };
    }

    default:
      return state;
  }
};
