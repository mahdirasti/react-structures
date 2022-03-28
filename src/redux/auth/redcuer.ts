import * as actionTypes from "./actions";

import { Reducer } from "redux";

type StateType = {
  isLoading: boolean;
  isAuthenticated: boolean;
  authToken: string | null;
};

const initial: StateType = {
  isLoading: true,
  isAuthenticated: true,
  authToken: null,
};

const reducer: Reducer<StateType> = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        authToken: action.payload.token,
      };
    case actionTypes.AUTH_FAILURE:
      return {
        isLoading: false,
        isAuthenticated: false,
        authToken: null,
      };
    default:
      return state;
  }
};

export default reducer;
