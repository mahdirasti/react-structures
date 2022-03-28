import { authReducer } from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
/* will add persist configs here */
