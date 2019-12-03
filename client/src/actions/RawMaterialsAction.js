import {
  RAW_MATERIAL_ADD_ITEM,
  RAW_MATERIAL_ADD_ITEM_RECIEVED,
  RAW_MATERIAL_DELETE_ITEM,
  RAW_MATERIAL_HANDLE_FORM,
  GET_RAW_MATERIAL_ACTION,
  GET_RAW_MATERIAL_ACTION_RECIEVED
} from "./../constants/ActionTypes";

export const setItemHandleForm = rawMaterialtext => {
  return {
    type: RAW_MATERIAL_HANDLE_FORM,
    rawMaterialtext: rawMaterialtext
  };
};

export const addItemAction = itemAdded => {
  return {
    type: RAW_MATERIAL_ADD_ITEM,
    payload: itemAdded,
    rawMaterialtext: itemAdded,
    rawMaterialkey: Date.now()
  };
};

export const addItemRecieved = itemRecieved => {
  return {
    type: RAW_MATERIAL_ADD_ITEM_RECIEVED,
    payload: itemRecieved
  };
};

export const deleteItemAction = itemDeleted => {
  return {
    type: RAW_MATERIAL_DELETE_ITEM,
    rawMaterialkey: itemDeleted
  };
};

export const getRawMaterialAction = payload => {
  return {
    type: GET_RAW_MATERIAL_ACTION,
    payload: payload
  };
};

export const getRawMaterialActionReceived = payload => {
  return {
    type: GET_RAW_MATERIAL_ACTION_RECIEVED,
    payload: payload
  };
};
