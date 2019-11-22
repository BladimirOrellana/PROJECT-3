import { combineReducers } from "redux";
import { RAW_MATERIAL_ADD_ITEM, RAW_MATERIAL_DELETE_ITEM, RAW_MATERIAL_INPUT_CHANGE, UPDATE_MATERIAL_LIST } from "../actions/RawMaterialsAction.js";

const initialState = {
    materialItem: "",
    materialItemList: [],
};

const formInput = function(state = initialState, action) {
    switch (action.type) {
      case RAW_MATERIAL_INPUT_CHANGE:
        return {
          ...state,
          [action.name]: action.value
        };
      case UPDATE_MATERIAL_LIST:
      console.log(action)    
      return {
            ...state,
          };
      default:
        return state;
    }
};
  
const formAction = function(state = initialState, action) {
    switch (action.type) {
      case RAW_MATERIAL_ADD_ITEM:
        //debugger;
        return {
          ...state,
          materialItemList: [
            ...state.materialItemList,
            {
              text: action.text,
              key: action.key
            }
          ]
        };
      case RAW_MATERIAL_DELETE_ITEM:
        //debugger;
        var newmaterialItemList = state.materialItemList.filter(todo => todo.key !== action.key);
        return {
          ...state,
          materialItemList: newmaterialItemList
        };
      default:
        return state;
    }
};

const RawMaterialsReducer = combineReducers({
    formInput,
    formAction
});


export default RawMaterialsReducer;
