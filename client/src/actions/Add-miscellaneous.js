

import {ADD_PAYMENT_ACTION_RECEIVED, ADD_PAYMENT_ACTION, GET_ALL_ACTIVES_QUOTES_FROM_DATABASE,GET_ALL_ACTIVES_QUOTES_FROM_DATABASE_RECEIVED} from "./../constants/ActionTypes";


export   const getAllActiveQuotesFromDatabaseAction = (activeQuotes) =>{
    return {
           type: GET_ALL_ACTIVES_QUOTES_FROM_DATABASE,
           payload: activeQuotes
       }
   
      
   }
export   const getAllActiveQuotesFromDatabaseActionReceived = (activeQuotesRecieved) =>{
  return {
        type: GET_ALL_ACTIVES_QUOTES_FROM_DATABASE_RECEIVED,
        quoteDetails: activeQuotesRecieved
    }

   
}

export   const addPaymentAction = (payload) =>{
    return {
           type: ADD_PAYMENT_ACTION,
           payload: payload
       }
   
      
   }

export   const addPaymentActionReceived = (recieved) =>{
    return {
          type: ADD_PAYMENT_ACTION_RECEIVED,
          payload: recieved
      }
  
     
  }
