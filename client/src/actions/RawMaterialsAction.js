import {
  RAW_MATERIAL_ADD_ITEM,
  RAW_MATERIAL_DELETE_ITEM,
  RAW_MATERIAL_HANDLE_FORM,
  LOAD_RAW_MATERIALS_SUCCESS,
  RAW_MATERIAL_EDIT_ITEM,
  LOAD_RAW_MATERIALS,
  RAW_MATERIAL_ADD_ITEM_SUCCESS,
  ON_BLUR_EMPTYING
} from "./../constants/ActionTypes";

export const setItemHandleForm = payload => {
  return {
    type: RAW_MATERIAL_HANDLE_FORM,
    payload: payload
  };
};

export const addItemAction = payload => {
  return {
    type: RAW_MATERIAL_ADD_ITEM,
    payload: payload
  };
};

export const addItemSuccess = payload => {
  return {
    type: RAW_MATERIAL_ADD_ITEM_SUCCESS,
    payload: payload
  };
};

export const deleteItemAction = payload => {
  return {
    type: RAW_MATERIAL_DELETE_ITEM,
    payload: payload
  };
};

export const rawMaterialEditItem = payload => {
  return {
    type: RAW_MATERIAL_EDIT_ITEM,
    payload: payload
  };
};

export const loadRawMaterialsSuccess = payload => {
  return {
    type: LOAD_RAW_MATERIALS_SUCCESS,
    payload: payload
  };
};

export const loadRawMaterials = () => {
  return {
    type: LOAD_RAW_MATERIALS
  };
};

export const onBlurEmptying = () => {
  return {
    type: ON_BLUR_EMPTYING
  };
};
