import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { GET_USERS_WITH_QUOTES_ACTION , GET_USER_WITH_QUOTE_ACTION} from "./../constants/ActionTypes";
import { getUsersWithQuotesActionReceived, getUserWithQuoteActionReceived } from "./../actions/GetUsersWithQuotes";
import API from "./../api/UserAPI";

//SAGA IS GETTING ALL USERS 
const getUsersWithQuotesRequest = async dataRequest => {
  return await API.getUsers()
    .then(result => result)
    .catch(err => err);
};

function* getUsersWithQuotesReceived({ payload }) {
  const data = yield call(getUsersWithQuotesRequest, payload);
  const users = data.data;

  yield put(getUsersWithQuotesActionReceived(users));
}

function* getUsersWithQuotesListener() {
  yield takeEvery(GET_USERS_WITH_QUOTES_ACTION, getUsersWithQuotesReceived);
}

//SAGA IS GETTING ALL USERS WITH USER ID AND PROJECT ID 
const getUserWithQuoteRequest = async (dataRequest) => {
  const userId = dataRequest.userId
  const projectId = dataRequest.projectId;
  return await API.getUserProject(userId,projectId)
 
    .then(result => result)
    .catch(err => err);
};

function* getUserWithQuoteReceived({ payload }) {
  
  console.log("PALOAD USER SAGA", payload)
  const data = yield call(getUserWithQuoteRequest, payload);
  
  const users = data.data;

  yield put(getUserWithQuoteActionReceived(users));
}

function* getUserWithQuoteListener() {
 
  yield takeEvery(GET_USER_WITH_QUOTE_ACTION, getUserWithQuoteReceived);
}

export default function* rootSaga() {
  yield all([fork(getUsersWithQuotesListener),fork(getUserWithQuoteListener)]);
}
