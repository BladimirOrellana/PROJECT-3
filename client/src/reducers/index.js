import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import Auth from "./Auth";
import { RawMaterialsReducer } from "./RawMaterialsReducer.js";
import Project from "./Project";

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth: Auth,
    rawMaterialsReducer: RawMaterialsReducer,
    project: Project
  });
