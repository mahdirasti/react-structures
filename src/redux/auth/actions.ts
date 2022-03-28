export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_LOADING = "AUTH_LOADING";

const authSuccess = (token: string) => ({
  type: AUTH_SUCCESS,
  payload: {
    token,
  },
});

const authLoading = () => ({
  type: AUTH_LOADING,
});

const authFailure = () => ({
  type: AUTH_FAILURE,
});

const actions = {
  authFailure,
  authLoading,
  authSuccess,
};
export default actions;
