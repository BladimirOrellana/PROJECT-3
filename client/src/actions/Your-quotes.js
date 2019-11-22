

import {GET_ALL_QUOTES_FROM_DATABASE, GET_ALL_QUOTES_FROM_DATABASE_RECIVED} from "./../constants/ActionTypes";

export   const getAllYourQuotesAction = (payload) =>{
   

    return {
           type: GET_ALL_QUOTES_FROM_DATABASE,
           payload: payload
       }
   
      
   }
export   const getAllYourQuotesActionRecived = (quotes) =>{

 return {
        type: GET_ALL_QUOTES_FROM_DATABASE_RECIVED,
         quotes
    }

   
}

