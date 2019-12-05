import { all, call, put, fork, takeEvery, takeLatest} from "redux-saga/effects";
import { SEND_EMAIL_ACTION} from './../constants/ActionTypes';
import {sendEmailActionReceived} from './../actions/Email';
import API from './../api/Email';
const sendEmailRequest = async (activeProjects) =>{
    
   
    return await  API.sendEmail(activeProjects)
    .then(result => result)
    .catch(err => err)
}

function* sendEmailReceived({payload}){
    console.log("SAGA EMAIL", payload)
    
    const activeProjects = yield call(sendEmailRequest,payload);
   
    yield put(sendEmailActionReceived(activeProjects.data));
}
function* sendEmailListener(){
    console.log("SAGA EMAIL 1")
    yield takeEvery(SEND_EMAIL_ACTION,sendEmailReceived);
}


  export default function* rootSaga(){
      yield all([fork(sendEmailListener)]);
  }