import { HYDRATE } from "next-redux-wrapper";
import actions from "./dashboard.action";

const initState = {
  error: "",
  dashboardData: [],
  message: "",
};

export default function dashboardReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardData: action.payload,
      };
    case actions.GET_DASHBOARD_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
