import { StateType } from "@/redux/createStore";
import { createSelector } from "reselect";

export const loadingSelector = createSelector(
  (state: StateType) => state.auth,
  (auth) => auth.isLoading
);

export const isAuthSelector = createSelector(
  (state: StateType) => state.auth,
  (auth) => auth.isAuthenticated
);

export const tokenSelector = createSelector(
  (state: StateType) => state.auth,
  (auth) => auth.authToken
)
