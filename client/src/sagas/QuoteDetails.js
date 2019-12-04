import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { GET_QUOTE_DETAILS_FROM_DATABASE} from './../constants/ActionTypes';
import {getQuoteDetailsFromDatabaseActionReceived} from './../actions/Quote-details';
import API from './../api/ProjectAPI';
const getQuoteDetailsFromDatabaseRequest = async (quoteId) =>{
    
    
    return await 
    API.getProjectByClientProjectId(quoteId)
    .then(result => result)
    .catch(err => err)
}

function* getQuoteDetailsFromDatabaseReceived({payload}){
    const quoteId = payload;
    
    const quoteDetails = yield call(getQuoteDetailsFromDatabaseRequest,quoteId);
   
    yield put(getQuoteDetailsFromDatabaseActionReceived(quoteDetails.data));
}
function* getQuoteDetailsFromDatabaseListener(){
   
    yield takeEvery(GET_QUOTE_DETAILS_FROM_DATABASE,getQuoteDetailsFromDatabaseReceived);
}



  export default function* rootSaga(){
      yield all([fork(getQuoteDetailsFromDatabaseListener)]);
  }