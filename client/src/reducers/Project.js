import {
  GET_QUOTE_SUCCESS,
  GATES_NUMBER_P,
  SIDES_NUMBER_P
} from "constants/ActionTypes";

const INIT_STATE = {
  fenceSidesInfo: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIDES_NUMBER_P: {
      const sidesNumber = action.payload;
      const sidesInfo = [];
      
      for (let i = 0; i < sidesNumber; i++) {
        sidesInfo.push({
          description: "",
          length: 0,
          woodType: "Pine",
          gates: []
        });
      }
      return {
        ...state,
        fenceSidesInfo: sidesInfo
      };
    }

    case GATES_NUMBER_P: {
      const { sideIndex, gatesNumber } = action.payload;
      const sidesInfo = [...state.fenceSidesInfo];

      for (let i = 0; i < gatesNumber; i++) {
        sidesInfo[sideIndex].gates.push({
          size: 0,
          type: "Single"
        });
      }
      return {
        ...state,
        fenceSidesInfo: sidesInfo
      };
    }

    // case GET_QUOTE_SUCCESS: {
    //   return {
    //     ...state
    //   };
    // }

    default:
      return state;
  }
};
