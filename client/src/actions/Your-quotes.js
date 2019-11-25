

import {GET_ALL_QUOTES_FROM_DATABASE, GET_ALL_QUOTES_FROM_DATABASE_RECEIVED, UPDATE_STATE_ACTION, UPDATE_STATE_ACTION_RECEIVED} from "./../constants/ActionTypes";

export   const getAllYourQuotesAction = (payload) =>{
   

    return {
           type: GET_ALL_QUOTES_FROM_DATABASE,
           payload: payload
       }
   
      
   }
export   const getAllYourQuotesActionReceived = (quotes) =>{

 return {
        type: GET_ALL_QUOTES_FROM_DATABASE_RECEIVED,
         quotes
    }

   
}

///Update state
export   const updateStateAction = (payload) =>{
   

    return {
           type: UPDATE_STATE_ACTION,
           action: payload
       }
   
      
   }
export   const updateStateActionReceived = (upDateState) =>{
   
 return {
        type: UPDATE_STATE_ACTION_RECEIVED,
        upDateState
    }

   
}



