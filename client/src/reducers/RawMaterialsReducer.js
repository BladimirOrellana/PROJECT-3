import {
  LOAD_RAW_MATERIALS_SUCCESS,
  RAW_MATERIAL_HANDLE_FORM,
  RAW_MATERIAL_ADD_ITEM_SUCCESS,
  ON_BLUR_EMPTYING
} from "./../constants/ActionTypes";

const initialState = {
  materialItemList: [],
  rawMaterialtext: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RAW_MATERIAL_HANDLE_FORM:
      return {
        ...state,
        rawMaterialtext: action.payload
      };

    case RAW_MATERIAL_ADD_ITEM_SUCCESS:
      return {
        ...state,
        materialItemList: action.payload,
        rawMaterialtext: ""
      };

    case ON_BLUR_EMPTYING:
      return {
        ...state,
        rawMaterialtext: ""
      };

    case LOAD_RAW_MATERIALS_SUCCESS:
      return {
        ...state,
        materialItemList: action.payload
      };
    default:
      return state;
  }
};
