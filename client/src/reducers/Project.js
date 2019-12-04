import {
  GET_QUOTE_SUCCESS,
  EMPTYING_REDUCER_P,
  SELECTING_CLIENT_P
} from "constants/ActionTypes";

const INIT_STATE = {
  project_id: "",
  address: "",
  estimatedPrice: 0,
  estimatedPriceBySide: [],
  fenceSidesInfo: [],
  client: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE_SUCCESS: {
      return {
        ...state,
        address: action.payload.address,
        estimatedPrice: action.payload.estimatedPrice,
        estimatedPriceBySide: action.payload.estimatedPriceBySide,
        fenceSidesInfo: action.payload.fenceSidesInfo,
        project_id: action.payload.project_id,
        client: {}
      };
    }
    case EMPTYING_REDUCER_P: {
      return {
        ...state,
        address: "",
        estimatedPrice: 0,
        estimatedPriceBySide: [],
        fenceSidesInfo: [],
        project_id: "",
        client: {}
      };
    }
    case SELECTING_CLIENT_P: {
      return {
        ...state,
        client: action.payload
      };
    }

    default:
      return state;
  }
};
