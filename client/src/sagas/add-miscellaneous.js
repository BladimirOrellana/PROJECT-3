import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { GET_ALL_ACTIVES_QUOTES_FROM_DATABASE} from './../constants/ActionTypes';
import {getAllActiveQuotesFromDatabaseActionReceived} from './../actions/Add-miscellaneous';
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



  export default function* rootSaga(){
      yield all([fork(getAllActiveQuotesFromDatabaseListener)]);
  }