import { HYDRATE } from "next-redux-wrapper";
import actions from "./adminListing.action";

const initState = {
  error: "",
  data: [],
  totalAdmin: 0,
  admin: [],
  email: "",
  message: "",
};

export default function adminListingReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.GET_ADMIN_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.admins,
        totalAdmin: action.payload.total_admins
      };
    case actions.GET_ADMIN_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_SINGLE_ADMIN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
      };
    case actions.GET_SINGLE_ADMIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.CREATE_ADMIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.CREATE_ADMIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.DELETE_ADMIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
      };
    case actions.UPDATE_ADMIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
