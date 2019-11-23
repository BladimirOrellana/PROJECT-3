

import {GET_QUOTE_DETAILS_FROM_DATABASE, GET_QUOTE_DETAILS_FROM_DATABASE_RECEIVED} from "./../constants/ActionTypes";

export   const getQuoteDetailsFromDatabaseAction = (quoteId) =>{
    

    return {
           type: GET_QUOTE_DETAILS_FROM_DATABASE,
           payload: quoteId
       }
   
      
   }
export   const getQuoteDetailsFromDatabaseActionReceived = (quoteDetails) =>{
    
 return {
        type: GET_QUOTE_DETAILS_FROM_DATABASE_RECEIVED,
        quoteDetails: quoteDetails
    }

   
}