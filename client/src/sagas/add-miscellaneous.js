import { all, call, put, fork, takeEvery, takeLatest} from "redux-saga/effects";
import { GET_ALL_ACTIVES_QUOTES_FROM_DATABASE,ADD_PAYMENT_ACTION} from './../constants/ActionTypes';
import {getAllActiveQuotesFromDatabaseActionReceived,addPaymentActionReceived} from './../actions/Add-miscellaneous';
import API from './../api/MiscellaneousAPI';
import { getUserWithQuoteAction } from "actions";
const getAllActiveQuotesFromDatabaseRequest = async (activeProjects) =>{
    
   
    return await  API.getProjectsByStateActive(activeProjects)
    .then(result => result)
    .catch(err => err)
}

function* getAllActiveQuotesFromDatabaseReceived({payload}){
    
    
    const activeProjects = yield call(getAllActiveQuotesFromDatabaseRequest,payload);
   
    yield put(getAllActiveQuotesFromDatabaseActionReceived(activeProjects.data));
}
function* getAllActiveQuotesFromDatabaseListener(){
  
    yield takeEvery(GET_ALL_ACTIVES_QUOTES_FROM_DATABASE,getAllActiveQuotesFromDatabaseReceived);
}

//PAYMENT SAGA
const addPaymentRequest = async (payment) =>{
    
    return await API.addExpenses(payment)
    .then(result => result)
    .catch(err => err)
}


function* addPaymentReceived({payload}){
  
    yield call(addPaymentRequest, payload)
  
   yield put(getUserWithQuoteAction({userId: payload.userId, projectId: payload.quotedId}))

}
function* addPymentListener(){
    yield takeLatest(ADD_PAYMENT_ACTION,addPaymentReceived);
}



  export default function* rootSaga(){
      yield all([fork(getAllActiveQuotesFromDatabaseListener), fork(addPymentListener)]);
  }