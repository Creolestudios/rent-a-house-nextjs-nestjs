import { HYDRATE } from "next-redux-wrapper";
import actions from "./account.action";

const initState = {
  error: "",
  email: "",
  message: "",
  userDetails: [],
  countryList: [],
  stateList: [],
  cityList: [],
  languageList: [],
  accountRemoved:false,
};

export default function accountReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }
    case actions.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
      };

    case actions.GET_USER_DETAILS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.SUPPORTING_DOCUMENT_UPLOAD_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.SUPPORTING_DOCUMENT_UPLOAD_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.CONTACT_INFORMATION_REQUEST:
      return {
        ...state,
        message: action.payload,
      };

    case actions.CONTACT_INFORMATION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.NOTIFICATION_SETTING_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.NOTIFICATION_SETTING_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.GET_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        countryList: action.payload,
      };

    case actions.GET_COUNTRY_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.GET_STATE_LIST_SUCCESS:
      return {
        ...state,
        stateList: action.payload,
      };

    case actions.GET_STATE_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.GET_CITY_LIST_SUCCESS:
      return {
        ...state,
        cityList: action.payload,
      };

    case actions.GET_CITY_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.GET_LANGUAGE_LIST_SUCCESS:
      return {
        ...state,
        languageList: action.payload,
      };

    case actions.GET_LANGUAGE_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

      case actions.REMOVE_PROFILE_SUCCESS:
        return{
          ...state,
          accountRemoved:true
        }

        case actions.RESET_FLAG_VALUE:
          return{
            ...state,
            accountRemoved:false,
          }


    default:
      return { ...state };
  }
}
