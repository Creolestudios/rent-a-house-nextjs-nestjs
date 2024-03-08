import { HYDRATE } from "next-redux-wrapper";
import actions from "./userListing.action";

const initState = {
  error: "",
  userList: [],
  user: [],
  email: "",
  message: "",
  totalUser: 0
};

export default function usersListingReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.payload.users,
        totalUser: action.payload.total_users
        ,
      };
    case actions.GET_USER_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_SINGLE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case actions.GET_SINGLE_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.DELETE_USER_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.DELETE_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
