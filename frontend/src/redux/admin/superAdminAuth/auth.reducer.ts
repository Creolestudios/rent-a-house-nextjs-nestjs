import { HYDRATE } from "next-redux-wrapper";
import actions from "./auth.action";

const initState = {
  error: "",
  email: "",
  message: "",
  forgotPasswordModal: "",
};

export default function authReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
        forgotPasswordModal: false,
      };
    case actions.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.RESET_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
