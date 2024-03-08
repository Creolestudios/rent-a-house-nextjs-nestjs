import { HYDRATE } from "next-redux-wrapper";
import actions from "./languages.action";

const initState = {
  error: "",
  message: "",
  allLanguages: [],
};

export default function languageReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }
    case actions.CREATE_LANGUAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.CREATE_LANGUAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.GET_ALL_LANGUAGE_SUCCESS:
      return {
        ...state,
        allLanguages: action.payload,
      };

    case actions.GET_ALL_LANGUAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.REMOVE_LANGUAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.REMOVE_LANGUAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
}
