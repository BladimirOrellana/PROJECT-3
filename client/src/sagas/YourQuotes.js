import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { getAllYourQuotesActionReceived } from "./../actions/Your-quotes";
import { GET_ALL_QUOTES_FROM_DATABASE } from "../constants/ActionTypes";
import API from "../api/ProjectAPI";

const getAllQuotesFromDatabaseRequest = async (userId) => {

return await API.getProjectsByClienUserId(userId)
    .then(result => result)
    .catch(err => err);

}
function* getAllQuotesFromDatabaseRecived({payload}) {

    
    const userId = payload._id
    
  const quotes = yield call(getAllQuotesFromDatabaseRequest,userId);
  
  yield put(getAllYourQuotesActionReceived(quotes.data));
}

function* getAllQuotesFromDatabaseListener() {
  yield takeEvery(
    GET_ALL_QUOTES_FROM_DATABASE,
    getAllQuotesFromDatabaseRecived
  );
}
export default function* rootSaga() {
  yield all([fork(getAllQuotesFromDatabaseListener)]);
}
