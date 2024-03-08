export const actions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR",

  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR",

  // NOTE remove any from below code
  login: (payload: any) => {
    return {
      type: actions.LOGIN_REQUEST,
      payload: payload,
    }
  },

  forgotPassword: (payload: string) => ({
    type: actions.FORGOT_PASSWORD_REQUEST,
    payload: payload,
  }),

  resetPassword: (payload: object) => ({
    type: actions.RESET_PASSWORD_REQUEST,
    payload: payload,
  }),
};
export default actions;
