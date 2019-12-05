import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  RAW_MATERIAL_ADD_ITEM,
  LOAD_RAW_MATERIALS,
  RAW_MATERIAL_DELETE_ITEM,
  RAW_MATERIAL_EDIT_ITEM
} from "./../constants/ActionTypes";
import RawMaterialsAPI from "api/RawMaterialsAPI";
import {
  loadRawMaterialsSuccess,
  addItemSuccess
} from "./../actions/RawMaterialsAction";
import { showAuthMessage, hideMessage } from "../actions/Auth";

const loadRawMaterials = async () => {
  return await RawMaterialsAPI.getRawMaterials()
    .then(result => result)
    .catch(err => err);
};

const addItemAction = async payload => {
  return await RawMaterialsAPI.saveRawMaterial(payload)
    .then(result => result)
    .catch(err => err);
};

const deleteItemAction = async payload => {
  return await RawMaterialsAPI.deleteRawMaterial(payload)
    .then(result => result)
    .catch(err => err);
};

const editItemAction = async (_id, rawMaterial) => {
  return await RawMaterialsAPI.updateRawMaterial(_id, rawMaterial)
    .then(result => result)
    .catch(err => err);
};

function* addItemActionReceived({ payload }) {
  const { materialItem } = payload;
  try {
    yield call(addItemAction, { materialItem });
    const testRMApi = yield call(loadRawMaterials);

    yield put(addItemSuccess(testRMApi.data));
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

function* loadRawMaterialsReceived() {
  try {
    const materials = yield call(loadRawMaterials);

    yield put(loadRawMaterialsSuccess(materials.data));
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

function* deleteItemReceived({ payload }) {
  const { _id } = payload;
  try {
    yield call(deleteItemAction, _id);
    const testRMApi = yield call(loadRawMaterials);

    yield put(loadRawMaterialsSuccess(testRMApi.data));
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

function* editItemReceived({ payload }) {
  const { materialItem, _id } = payload;
  try {
    yield call(editItemAction, _id, { materialItem });
    const testRMApi = yield call(loadRawMaterials);

    yield put(loadRawMaterialsSuccess(testRMApi.data));
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

export function* loadRawMaterialsListener() {
  yield takeEvery(LOAD_RAW_MATERIALS, loadRawMaterialsReceived);
}

export function* addItemActionListener() {
  yield takeEvery(RAW_MATERIAL_ADD_ITEM, addItemActionReceived);
}

export function* deleteItemListener() {
  yield takeEvery(RAW_MATERIAL_DELETE_ITEM, deleteItemReceived);
}

export function* editItemListener() {
  yield takeEvery(RAW_MATERIAL_EDIT_ITEM, editItemReceived);
}

export default function* rootSaga() {
  yield all([
    fork(addItemActionListener),
    fork(loadRawMaterialsListener),
    fork(deleteItemListener),
    fork(editItemListener)
  ]);
}
