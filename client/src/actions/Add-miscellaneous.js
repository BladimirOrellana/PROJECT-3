

import {GET_ALL_ACTIVES_QUOTES_FROM_DATABASE,GET_ALL_ACTIVES_QUOTES_FROM_DATABASE_RECEIVED} from "./../constants/ActionTypes";


export   const getAllActiveQuotesFromDatabaseAction = (activeQuotes) =>{
    console.log("Actions",activeQuotes)

    return {
           type: GET_ALL_ACTIVES_QUOTES_FROM_DATABASE,
           payload: activeQuotes
       }
   
      
   }
export   const getAllActiveQuotesFromDatabaseActionReceived = (activeQuotesRecieved) =>{
    console.log("Reducer",activeQuotesRecieved)
 return {
        type: GET_ALL_ACTIVES_QUOTES_FROM_DATABASE_RECEIVED,
        quoteDetails: activeQuotesRecieved
    }

   
}