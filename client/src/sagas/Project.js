import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { showAuthMessage } from "actions"; /////
import { GET_QUOTE_P } from "constants/ActionTypes";

function* getQuoteGF() {
  try {
    /////code here
  } catch (error) {
    yield put(showAuthMessage(error)); ///////no funciona
  }
}

export function* getQuotePListen() {
  yield takeEvery(GET_QUOTE_P, getQuoteGF);
}

export default function* rootSaga() {
  yield all([fork(getQuotePListen)]);
}
