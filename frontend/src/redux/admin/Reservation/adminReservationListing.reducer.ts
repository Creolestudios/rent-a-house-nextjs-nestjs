import { message } from "antd";
import { HYDRATE } from "next-redux-wrapper";
import reservationActions from "./adminReservationListing.action";

const initialState = {
  error: "",
  totalReservation:'',
  reservationList: [],
  singleReservation: "",
};

export default function adminReservationListingReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }
    
    case reservationActions.RESERVATION_LIST_SUCCESS:
      return {
        ...state,
        reservationList: action.payload.reservations,
        totalReservation:action.payload.totalReservations
      };
    case reservationActions.RESERVATION_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case reservationActions.SINGLE_RESERVATION_LIST_SUCCESS:
      return {
        ...state,
        singleReservation: action.payload,
      };
      case reservationActions.SINGLE_RESERVATION_LIST_ERROR:
        return {
          ...state,
          error: action.payload,
        };

    default:
      return { ...state };
  }
}
