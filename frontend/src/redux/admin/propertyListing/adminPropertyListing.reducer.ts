import { message } from 'antd';
import { HYDRATE } from 'next-redux-wrapper';
import actions from './adminPropertyListing.action';

const initState = {
  error: '',
  propertyList: [],
  singleProperty: [],
  totalProperty: 0,
  message: '',
  tenantHistory: [],
  totalTenant: 0,
  tenant: {},
};

export default function adminPropertyListingReducer(
  state = initState,
  action: any
) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        propertyList: action.payload.properties,
        totalProperty: action.payload.total_properties,
      };
    case actions.PROPERTY_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADMIN_SINGLE_PROPERTY_SUCCESS:
      return {
        ...state,
        singleProperty: action.payload,
      };
    case actions.ADMIN_SINGLE_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.ADMIN_DELETE_PROPERTY_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.ADMIN_DELETE_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.GET_TENANT_LIST_SUCCESS:
      return {
        ...state,
        tenantHistory: action.payload.booking,
        totalTenant: action.payload.total_booking,
      };
    case actions.GET_TENANT_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.TENANT_DETAILS_SUCCESS:
      return {
        ...state,
        tenant: action.payload,
      };
    case actions.TENANT_DETAILS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
