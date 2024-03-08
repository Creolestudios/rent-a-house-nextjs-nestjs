import { HYDRATE } from "next-redux-wrapper";
import actions from "./commission.action";

const initState = {
  error: "",
  commission: "",
  commissionFrom: "",
  message: "",
};

export default function commissionReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.GET_COMMISSION_SUCCESS:
      return {
        ...state,
        commission: action.payload?.value,
        commissionFrom: action.payload?.commission_from,
      };

    case actions.GET_COMMISSION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.UPDATE_COMMISSION_SUCCESS:
      return {
        ...state,
        commission: action.payload,
      };

    case actions.UPDATE_COMMISSION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
