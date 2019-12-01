import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { RAW_MATERIAL_ADD_ITEM } from "./../constants/ActionTypes";
import RawMaterialsAPI from "api/RawMaterialsAPI";
import { addItemRecieved } from "./../actions/RawMaterialsAction";
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

export default function* rootSaga() {
  yield all([fork(updateRawMaterialListListener)]);
}
