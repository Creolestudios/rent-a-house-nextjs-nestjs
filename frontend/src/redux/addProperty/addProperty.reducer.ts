import { HYDRATE } from 'next-redux-wrapper';
import actions from './addProperty.action';

const initState = {
  error: '',
  propertyId: 0,
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
  step7: {},
  mobileNo: 0,
  addPropertyStepper: 1,
};

export default function addPropertyReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.CHANGE_STEPPER_REQUEST:
      return {
        ...state,
        addPropertyStepper: action.payload,
      };

    case actions.STEP2_DATA:
      return {
        ...state,
        step2: action.payload,
      };
    case actions.STEP3_DATA:
      return {
        ...state,
        step3: action.payload,
      };
    case actions.STEP4_DATA:
      return {
        ...state,
        step4: action.payload,
      };
    case actions.STEP5_DATA:
      return {
        ...state,
        step5: action.payload,
      };
    case actions.STEP6_DATA:
      return {
        ...state,
        step6: action.payload,
      };
    case actions.STEP7_DATA:
      return {
        ...state,
        step7: action.payload,
      };

    case actions.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        country: action.payload,
      };
    case actions.GET_COUNTRY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_STATE_SUCCESS:
      return {
        ...state,
        stateList: action.payload,
      };
    case actions.GET_STATE_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
      };
    case actions.GET_CITY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_FACILITY_AMENITIES_SUCCESS:
      return {
        ...state,
        facilities: action.payload?.amenities,
        amenities: action.payload?.facilities,
      };

    case actions.ADD_MOBILE_SUCCESS:
      return {
        ...state,
        propertyId: action.payload?.property_id,
        mobileNo: action.payload?.mobile_number,
      };

    case actions.ADD_PROPERTY_STEP2_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
        addPropertyStepper: 3,
      };
    case actions.ADD_PROPERTY_STEP2_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADD_PROPERTY_STEP3_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
        addPropertyStepper: 4,
      };
    case actions.ADD_PROPERTY_STEP3_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADD_PROPERTY_STEP4_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
        addPropertyStepper: 5,
      };
    case actions.ADD_PROPERTY_STEP4_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADD_PROPERTY_STEP5_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
        addPropertyStepper: 6,
      };
    case actions.ADD_PROPERTY_STEP5_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADD_PROPERTY_STEP6_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
        addPropertyStepper: 7,
      };
    case actions.ADD_PROPERTY_STEP6_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADD_PROPERTY_STEP7_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
        addPropertyStepper: 1,
      };
    case actions.ADD_PROPERTY_STEP7_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADD_REQUEST_OTP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.ADD_REQUEST_OTP_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADD_SUBMIT_OTP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.ADD_SUBMIT_OTP_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
