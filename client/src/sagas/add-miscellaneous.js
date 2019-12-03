import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { GET_ALL_ACTIVES_QUOTES_FROM_DATABASE,ADD_PAYMENT_ACTION} from './../constants/ActionTypes';
import {getAllActiveQuotesFromDatabaseActionReceived,addPaymentActionReceived} from './../actions/Add-miscellaneous';
import API from './../api/MiscellaneousAPI';
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
   
    const result = yield call(addPaymentRequest, payload)
    yield put(addPaymentActionReceived(result))

}
function* addPymentListener(){
    yield takeEvery(ADD_PAYMENT_ACTION,addPaymentReceived);
}



  export default function* rootSaga(){
      yield all([fork(getAllActiveQuotesFromDatabaseListener), fork(addPymentListener)]);
  }