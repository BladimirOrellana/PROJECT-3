import { GET_QUOTE_SUCCESS, EMPTYING_REDUCER_P } from "constants/ActionTypes";

const INIT_STATE = {
  project_id: "",
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
        fenceSidesInfo: action.payload.fenceSidesInfo,
        project_id: action.payload.project_id
      };
    }
    case EMPTYING_REDUCER_P: {
      return {
        ...state,
        address: "",
        estimatedPrice: 0,
        estimatedPriceBySide: [],
        fenceSidesInfo: [],
        project_id: ""
      };
    }

    default:
      return state;
  }
};
