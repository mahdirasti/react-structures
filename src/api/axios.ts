import { StateType, store } from "@/redux";

import axios from "axios";

const tokenSelector = (state: StateType): string | null => {
  return state.auth.authToken;
};

/**
 * axios instance and interceptors are created here.
 * Will subscribe to redux store later on.
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    Accept: "application/json, text/plain, */*",
    "X-CSRF-TOKEN": "",
    Authorization: `Bearer ${tokenSelector(store.getState())}`,
  },
});

store.subscribe(() => {
  const headers = api.defaults.headers as any;
  headers["Authorization"] = "Bearer " + tokenSelector(store.getState());
});

export default api;
