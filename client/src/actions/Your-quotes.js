import {GET_ALL_QUOTES_FROM_DATABASE} from "./../constants/ActionTypes";
export  const getAllYourQuotesAction = () =>{
    const name = {name: "alex",age:31}
    return {
        type: GET_ALL_QUOTES_FROM_DATABASE,
        payload: name
    }
}