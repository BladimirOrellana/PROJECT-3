import {
  RAW_MATERIAL_ADD_ITEM,
  RAW_MATERIAL_ADD_ITEM_RECIEVED,
  RAW_MATERIAL_DELETE_ITEM,
  RAW_MATERIAL_HANDLE_FORM
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
