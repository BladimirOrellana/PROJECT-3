import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  RAW_MATERIAL_ADD_ITEM,
  RAW_MATERIAL_ADD_ITEM_RECIEVED
} from "./../constants/ActionTypes";
import RawMaterialsAPI from "api/RawMaterialsAPI";
import {
  addItemAction,
  addItemRecieved
} from "./../actions/RawMaterialsAction";

function* updateRawMaterialListSaga({ payload }) {
  try {
    yield call(RawMaterialsAPI.saveRawMaterial, [payload]);
    const testRMApi = yield call(RawMaterialsAPI.getRawMaterials);
    const rawMaterialListData = testRMApi.data.map(
      dataObj => dataObj.materialItem
    );
    //rawMaterialListData to be sent in dispatch to update redux store
    //yield put(ACTION GOES HERE)
    //Where this goes from hereis the reducer!
    console.log(testRMApi);
    console.log(rawMaterialListData);
  } catch (err) {
    console.log(err);
  }
}

export function* updateRawMaterialListListener() {
  yield takeEvery(RAW_MATERIAL_ADD_ITEM, updateRawMaterialListSaga);
}

export default function* rootSaga() {
  yield all([fork(updateRawMaterialListListener)]);
}
