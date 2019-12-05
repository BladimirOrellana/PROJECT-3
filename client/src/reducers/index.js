import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import Auth from "./Auth";
import RawMaterials from "./RawMaterialsReducer";
import Project from "./Project";
import User from "./User";
import Quotes from "./Your-quotes-reducers";
import QuoteDetails from "./Quote-details";
import ActiveProjects from "./add-miscellaneous";
import UsersWithQuotes from "./GetUsersWithQuotes";

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth: Auth,
    project: Project,
    user: User,
    quotes: Quotes,
    quoteDetails: QuoteDetails,
    activeProjects: ActiveProjects,
    usersWithQuotes: UsersWithQuotes,
    rawMaterials: RawMaterials
  });
