import {
  RAW_MATERIAL_ADD_ITEM,
  RAW_MATERIAL_DELETE_ITEM,
  RAW_MATERIAL_HANDLE_FORM,
  RAW_MATERIAL_ADD_ITEM_RECIEVED
} from "./../constants/ActionTypes";

const initialState = {
  materialItemList: [],
  materialItem: {
    rawMaterialtext: "",
    rawMaterialkey: ""
  }
};

export const RawMaterialsReducer = function(state = initialState, action) {
  switch (action.type) {
    // Raw Material Handle Form Input Change
    case RAW_MATERIAL_HANDLE_FORM:
      return {
        ...state,
        materialItem: {
          ...state.materialItem,
          rawMaterialtext: action.rawMaterialtext
        }
      };
    case RAW_MATERIAL_ADD_ITEM_RECIEVED:
      return {
        ...state
      };
    // ********************************
    // Raw Material Handle Form Actions
    case RAW_MATERIAL_ADD_ITEM:
      return {
        ...state,
        materialItemList: [
          ...state.materialItemList,
          {
            rawMaterialtext: action.rawMaterialtext,
            rawMaterialkey: action.rawMaterialkey
          }
        ]
      };
    case RAW_MATERIAL_DELETE_ITEM:
      let newmaterialItemList = state.materialItemList.filter(
        deletedItem => deletedItem.rawMaterialkey !== action.rawMaterialkey
      );

      return {
        ...state,
        materialItemList: newmaterialItemList
      };
    default:
      return state;
  }
};
