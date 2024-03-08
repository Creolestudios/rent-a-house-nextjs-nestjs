import { HYDRATE } from 'next-redux-wrapper';
import actions from './duplicateListing.action';

const initState = {
  error: '',
  propertyId: 0,
  duplicateList: [],
  mobile_details: {},
  country: [],
  stateList: [],
  city: [],
  facilities: [],
  amenities: [],
  step2: {},
  step3: {},
  step4: [],
  step5: {},
  step6: {},
  step7: [],
  addPropertyStepper: 1,
};

export default function duplicateListReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.GET_DUPLICATE_LISTING_SUCCESS:
      return {
        ...state,
        duplicateList: action.payload,
      };
    case actions.GET_DUPLICATE_LISTING_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_MOBILE_NUMBER_SUCCESS:
      return {
        ...state,
        mobile_details: action.payload,
      };
    case actions.GET_MOBILE_NUMBER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.REQUEST_OTP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.REQUEST_OTP_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.SUBMIT_OTP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.SUBMIT_OTP_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_STEP2_DATA_SUCCESS:
      return {
        ...state,
        step2: action.payload,
      };
    case actions.SET_PROPERTY_ID_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
      };
    case actions.GET_STEP3_DATA_SUCCESS:
      return {
        ...state,
        step3: action.payload,
      };
    case actions.GET_STEP4_DATA_SUCCESS:
      return {
        ...state,
        step4: action.payload,
      };
    case actions.GET_STEP5_DATA_SUCCESS:
      return {
        ...state,
        step5: action.payload,
      };
    case actions.GET_STEP6_DATA_SUCCESS:
      return {
        ...state,
        step6: action.payload,
      };
    case actions.GET_STEP7_DATA_SUCCESS:
      return {
        ...state,
        step7: action.payload,
      };

    case actions.GET_STEP_DATA_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.EDIT_PROPERTY_STEP2_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.EDIT_PROPERTY_STEP2_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.EDIT_PROPERTY_STEP3_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.EDIT_PROPERTY_STEP3_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.EDIT_PROPERTY_STEP4_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.EDIT_PROPERTY_STEP4_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.EDIT_PROPERTY_STEP5_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.EDIT_PROPERTY_STEP5_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.EDIT_PROPERTY_STEP6_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.EDIT_PROPERTY_STEP6_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.EDIT_PROPERTY_STEP7_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.EDIT_PROPERTY_STEP7_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.DELETE_PROPERTY_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.DELETE_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
