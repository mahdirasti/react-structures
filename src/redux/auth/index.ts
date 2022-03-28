import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authActions from "./actions";
import reducer from "./redcuer";
import * as authSelectors from "./selectors";

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authToken"],
};

const authReducer = persistReducer(persistConfig, reducer);

export { authActions, authReducer, authSelectors };
