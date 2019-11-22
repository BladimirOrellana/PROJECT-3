export const RAW_MATERIAL_ADD_ITEM = "RAW_MATERIAL_ADD_ITEM";
export const RAW_MATERIAL_DELETE_ITEM = "RAW_MATERIAL_DELETE_ITEM";
export const RAW_MATERIAL_INPUT_CHANGE = "RAW_MATERIAL_INPUT_CHANGE";
export const UPDATE_MATERIAL_LIST = "UPDATE_MATERIAL_LIST";


export const addItem = text => {
  return { type: RAW_MATERIAL_ADD_ITEM, text: text, key: Date.now() };
};

export const deleteItem = key => {
  return { type: RAW_MATERIAL_DELETE_ITEM, key: key };
};
