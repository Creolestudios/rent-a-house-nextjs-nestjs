import { HYDRATE } from "next-redux-wrapper";
import actions from "./auth.action";

const initState = {
  error: "",
  email: "",
  message: "",
  forgotPasswordModal: "",
  userToken: "",
  googleURL: "",
};

export default function userAuthReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }
    case actions.CREATE_USER_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.CREATE_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        userToken: action.payload.token,
      };
    case actions.USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        googleURL: action.payload,
      };
    case actions.GOOGLE_LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.FORGOT_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.FORGOT_USER_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.RESET_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.RESET_USER_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
