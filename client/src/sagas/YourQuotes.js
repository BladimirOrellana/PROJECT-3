import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { getAllYourQuotesActionReceived,updateStateActionReceived } from "./../actions/Your-quotes";
import { GET_ALL_QUOTES_FROM_DATABASE,UPDATE_STATE_ACTION } from "../constants/ActionTypes";
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


//Update state of action Saga
const updataStateActionRequest =  async (action)=> {
  
  return await API.upDateStateOfProjectByClientProjectId(action)
  .then(result => result)
  .catch(err => err)
}


function* updataStateActionReceivedSaga({action}){
  

  

  const newState =  yield call(updataStateActionRequest,action)
 
  yield put(updateStateActionReceived(newState.data.state))
  yield put(getAllYourQuotesActionReceived(newState.data));
}

function* updateStateOfQuoteListener(){
  
  yield takeEvery(UPDATE_STATE_ACTION, updataStateActionReceivedSaga)
}


export default function* rootSaga() {
  yield all([fork(getAllQuotesFromDatabaseListener),
    fork(updateStateOfQuoteListener)]);
}
