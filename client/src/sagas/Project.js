import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { showAuthMessage, getQuoteSuccess } from "actions";
import { GET_QUOTE_P } from "constants/ActionTypes";
import QuoteAPI from "../api/QuoteAPI";
import ProjectAPI from "../api/ProjectAPI";
import FenceSideAPI from "../api/FenceSideAPI";
import GateAPI from "../api/GateAPI";

const CalculateAQuote = async payload =>
  await QuoteAPI.getQuote(payload)
    .then(result => result)
    .catch(error => error);

const SaveProject = async payload =>
  await ProjectAPI.saveProject(payload)
    .then(result => result)
    .catch(error => error);

const SaveFenceSide = async payload =>
  await FenceSideAPI.saveFenceSide(payload)
    .then(result => result)
    .catch(error => error);

const SaveGate = async payload =>
  await GateAPI.saveGate(payload)
    .then(result => result)
    .catch(error => error);

function* getQuoteGF({ payload }) {
  const { address, fenceSidesInfo } = payload;
  try {
    const price = yield call(CalculateAQuote, fenceSidesInfo);
    const sidesIds = [];

    for (let i = 0; i < fenceSidesInfo.length; i++) {
      const side = fenceSidesInfo[i];
      const gatesIds = [];

      for (let j = 0; j < side.gates.length; j++) {
        const gate = side.gates[j];

        const newgate = yield call(SaveGate, {
          size: gate.size,
          type: gate.type
        });
        gatesIds.push(newgate.data._id);
      }

      const newside = yield call(SaveFenceSide, {
        description: side.description,
        length: side.length,
        woodType: side.woodType,
        gates: gatesIds
      });
      sidesIds.push(newside.data._id);
    }

    const newside = yield call(SaveProject, {
      address,
      estimatedPrice: price.data.totalQuote,
      state: "Estimated",
      employerPayments: 0,
      sides: sidesIds
    });

    console.log("nnnnnnnnnnnnnnnnn " + JSON.stringify(newside)); ///////////////
    yield put(
      getQuoteSuccess({
        address,
        estimatedPrice: price.data.totalQuote,
        estimatedPriceBySide: price.data.sidesQuotes,
        fenceSidesInfo
      })
    );
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