import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

export type StateType = ReturnType<typeof store.getState>;

/**
 * Persist config
 */
const persistConfig = {
  key: "user",
  storage,
  blacklist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

// persistor.purge()
