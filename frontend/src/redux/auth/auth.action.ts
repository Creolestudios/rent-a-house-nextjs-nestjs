export const actions = {
  CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_ERROR: "CREATE_USER_ERROR",

  USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR: "USER_LOGIN_ERROR",

  GOOGLE_LOGIN_REQUEST: "GOOGLE_LOGIN_REQUEST",
  GOOGLE_LOGIN_SUCCESS: "GOOGLE_LOGIN_SUCCESS",
  GOOGLE_LOGIN_ERROR: "GOOGLE_LOGIN_REQUEST",

  GOOGLE_REDIRECT_REQUEST: "GOOGLE_REDIRECT_REQUEST",
  GOOGLE_REDIRECT_SUCCESS: "GOOGLE_REDIRECT_SUCCESS",
  GOOGLE_REDIRECT_ERROR: "GOOGLE_REDIRECT_ERROR",

  FORGOT_USER_PASSWORD_REQUEST: "FORGOT_USER_PASSWORD_REQUEST",
  FORGOT_USER_PASSWORD_SUCCESS: "FORGOT_USER_PASSWORD_SUCCESS",
  FORGOT_USER_PASSWORD_ERROR: "FORGOT_USER_PASSWORD_ERROR",

  RESET_USER_PASSWORD_REQUEST: "RESET_USER_PASSWORD_REQUEST",
  RESET_USER_PASSWORD_SUCCESS: "RESET_USER_PASSWORD_SUCCESS",
  RESET_USER_PASSWORD_ERROR: "RESET_USER_PASSWORD_ERROR",

  createUser: (payload: any) => {
    return {
      type: actions.CREATE_USER_REQUEST,
      payload: payload,
    };
  },

  loginUser: (payload: any) => {
    return {
      type: actions.USER_LOGIN_REQUEST,
      payload: payload,
    };
  },

  googleLogin: () => {
    return {
      type: actions.GOOGLE_LOGIN_REQUEST,
    };
  },

  googleRedirection: (payload: any) => {
    return {
      type: actions.GOOGLE_REDIRECT_REQUEST,
      payload: payload,
    };
  },

  forgotPassword: (payload: string) => ({
    type: actions.FORGOT_USER_PASSWORD_REQUEST,
    payload: payload,
  }),

  resetPassword: (payload: object) => ({
    type: actions.RESET_USER_PASSWORD_REQUEST,
    payload: payload,
  }),
};
export default actions;
