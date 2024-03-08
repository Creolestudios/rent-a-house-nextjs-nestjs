import { HYDRATE } from "next-redux-wrapper";
import actions from "./siteConfig.action";

const initState = {
  error: "",
  data: {},
  message: "",
};

export default function siteConfigReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.SITE_CONFIG_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case actions.SITE_CONFIG_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.UPDATE_CONFIG_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.UPDATE_CONFIG_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
