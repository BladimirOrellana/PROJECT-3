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
  console.log("Action Create! :)");
  console.log(itemAdded);
  return {
    type: RAW_MATERIAL_ADD_ITEM,
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
  console.log("Action Delete! :(");
  console.log(itemDeleted);
  return {
    type: RAW_MATERIAL_DELETE_ITEM,
    rawMaterialkey: itemDeleted
  };
};
