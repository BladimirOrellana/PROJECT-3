import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { RAW_MATERIAL_ADD_ITEM,GET_RAW_MATERIAL_ACTION } from "./../constants/ActionTypes";
import RawMaterialsAPI from "api/RawMaterialsAPI";
import { addItemRecieved, getRawMaterialActionReceived } from "./../actions/RawMaterialsAction";
import { showAuthMessage } from "../actions/Auth";


function* updateRawMaterialListSaga({ payload }) {
  try {
    yield call(RawMaterialsAPI.saveRawMaterial, [payload]);
    const testRMApi = yield call(RawMaterialsAPI.getRawMaterials);
    const rawMaterialListData = testRMApi.data.map(
      dataObj => dataObj.materialItem
    );
    yield put(addItemRecieved(rawMaterialListData));
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* updateRawMaterialListListener() {
  yield takeEvery(RAW_MATERIAL_ADD_ITEM, updateRawMaterialListSaga);
}

//GET MATERIAL

const getRawMaterialActionRequest = async (payload) =>{
  
  
  return await RawMaterialsAPI.getRawMaterials()
  .then(result => result)
  .catch(err => err)
}
function* getRawMaterialReceived({ payload }) {
  
  
  try {
  const materials =  yield call(getRawMaterialActionRequest, payload);
  
    yield put(getRawMaterialActionReceived(materials.data))
    
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* getRawMaterialActionListener() {
 
  
  yield takeEvery(GET_RAW_MATERIAL_ACTION, getRawMaterialReceived);
}

export default function* rootSaga() {
  yield all([fork(updateRawMaterialListListener),fork(getRawMaterialActionListener)]);
}
