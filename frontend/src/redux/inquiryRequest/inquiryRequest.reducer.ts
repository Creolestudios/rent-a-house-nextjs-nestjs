import { message } from 'antd';
import { HYDRATE } from 'next-redux-wrapper';
import actions from './inquiryRequest.action';

const initState = {
  error: '',
  requiredDetails: {},
  userDetails: false,
  message: '',
  propertyInfo: {},
  bookingId: 0,
  tenantId: 0,
  landlordId: 0,
  chatingData: {},
  messages: [],
};

export default function inquiryRequestReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }
    case actions.GET_PROPERTY_SUCCESS:
      return {
        ...state,
        propertyInfo: action.payload,
      };
    case actions.GET_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.CHECK_DETAILS_SUCCESS:
      return {
        ...state,
        requiredDetails: action.payload?.null_fields,
        userDetails: action.payload?.user_details,
      };
    case actions.CHECK_DETAILS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.SEND_DETAILS_SUCCESS:
      return {
        ...state,
        message: action.payload?.messageWithInfoInput?.message,
        bookingId: action.payload?.messageWithInfoInput?.data?.id,
        tenantId: action.payload?.messageWithInfoInput?.data?.tenant_id,
        landlordId: action.payload?.messageWithInfoInput?.data?.landlord_id,
      };
    case actions.SEND_DETAILS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.CONTINUE_CHATING_SUCCESS:
      return {
        ...state,
        chatingData: action.payload.getPerticularChat,
        messages: action.payload.getPerticularChat.data,
      };
    case actions.CONTINUE_CHATING_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.LOGOUT:
      return {
        ...state,
        userDetails: false,
      };

    case actions.SET_SUBSCRIPTION_MESSAGES_REQUEST:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case actions.SEND_MESSAGES_SUCCESS:
      return {
        ...state,
      };

    case actions.SEND_MESSAGES_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
