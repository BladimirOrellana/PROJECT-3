import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  RAW_MATERIAL_ADD_ITEM,
  RAW_MATERIAL_ADD_ITEM_RECIEVED
} from "./../constants/ActionTypes";
import { addItemAction } from "./../actions/RawMaterialsAction";

function* updateRawMaterialListSaga({ payload }) {
  try {
    console.log("SAGA 2", payload);
    yield put(addItemAction());
  } catch (err) {
    console.log(err);
  }
}

export function* updateRawMaterialListListener() {
  console.log("SAGA 1");
  yield takeEvery(RAW_MATERIAL_ADD_ITEM, updateRawMaterialListSaga);
}

export default function* rootSaga() {
  yield all([fork(updateRawMaterialListListener)]);
}
