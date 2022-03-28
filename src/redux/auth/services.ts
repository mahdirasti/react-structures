import { api, getEndpoint } from "@/api";

import { Dispatch } from "redux";

type AuthStepOneData = {
  mobile: string;
};

export const authStepOne =
  (
    data: AuthStepOneData,
    setSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
    onSuccess: Function
  ) =>
  async (dispatch: Dispatch) => {
    setSubmitting(true);
    try {
      const url = getEndpoint("auth-otp-step-one");
      const response = await api.post<{ message: string }>(url);
      onSuccess();
      //To-do: toast message here
    } catch (e) {
      // To-do toast message here
    } finally {
      setSubmitting(false);
    }
  };
