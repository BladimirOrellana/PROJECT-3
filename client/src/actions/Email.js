import {SEND_EMAIL_ACTION, SEND_EMAIL_ACTION_RECEIVED} from './../constants/ActionTypes';

export   const sendEmailAction = (payload) =>{
    console.log("AC", payload)
    return {
           type: SEND_EMAIL_ACTION,
           payload: payload
       }
   
      
   }

   export   const sendEmailActionReceived = (payload) =>{
    console.log("AC REC", payload)
    return {
          type: SEND_EMAIL_ACTION_RECEIVED,
          payload: payload
      }

    }