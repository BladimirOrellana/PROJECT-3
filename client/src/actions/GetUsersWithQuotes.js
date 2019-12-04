import { GET_USERS_WITH_QUOTES_ACTION, GET_USERS_WITH_QUOTES_ACTION_RECEIVED,GET_USER_WITH_QUOTE_ACTION_RECEIVED,GET_USER_WITH_QUOTE_ACTION } from "../constants/ActionTypes";


export   const getUsersWithQuotesAction = (payload) =>{
    return {
           type: GET_USERS_WITH_QUOTES_ACTION,
           payload: payload
       }
   
      
   }
export   const getUsersWithQuotesActionReceived = (payload) =>{
  return {
        type: GET_USERS_WITH_QUOTES_ACTION_RECEIVED,
        payload: payload
    }
    

   
}
export   const getUserWithQuoteAction = (payload) =>{
    return {
          type: GET_USER_WITH_QUOTE_ACTION,
          payload: payload
      }
      
  
     
  }
  export   const getUserWithQuoteActionReceived = (payload) =>{
    return {
          type: GET_USER_WITH_QUOTE_ACTION_RECEIVED,
          payload: payload
      }
      
  
     
  }