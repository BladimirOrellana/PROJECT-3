import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import Auth from "./Auth";
import Project from "./Project";
import Quotes from './Your-quotes-reducers';
import QuoteDetails from './Quote-details';

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth: Auth,
    project: Project,
    quotes: Quotes,
    quoteDetails: QuoteDetails
  });
