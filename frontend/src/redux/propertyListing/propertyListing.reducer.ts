import { message } from 'antd';
import { HYDRATE } from 'next-redux-wrapper';
import actions from './propertyListing.action';

const initState = {
  error: '',
  featurePropertyList: [],
  favouritePropertyList: [],
  property: [],
  filterData: {},
  singleProperty: [],
  perUserPropertyList: [],
  perUserTotalProperty: 0,
  public:0,
  unpublic:0,
  draft:0,
  all:0,
  totalProperty: 0,
  totalFavourite: 0,
  message: '',
  perMonthRent: 0,
  searchData: {},
  pageNumber: 1,
  datePopUp:false,
  additional:0
};

export default function propertyListingReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.FEATURE_PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        featurePropertyList: action.payload,
      };
    case actions.FEATURE_PROPERTY_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.AUTH_FEATURE_PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        featurePropertyList: action.payload,
      };
    case actions.AUTH_FEATURE_PROPERTY_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.FAVORITE_PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        favouritePropertyList: action.payload?.properties,
        totalFavourite: action.payload?.total_properties,
      };
    case actions.FAVORITE_PROPERTY_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.PROPERTY_SEARCH_SUCCESS:
      return {
        ...state,
        property: action.payload.properties,
        totalProperty: action.payload.total_properties,
        filterData: action.payload.field_wise_count,
      };
    case actions.PROPERTY_SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.AUTH_PROPERTY_SEARCH_SUCCESS:
      return {
        ...state,
        property: action.payload.properties,
        totalProperty: action.payload.total_properties,
        filterData: action.payload.field_wise_count,
      };
    case actions.AUTH_PROPERTY_SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.SINGLE_PROPERTY_SUCCESS:
      return {
        ...state,
        singleProperty: action.payload,
      };
    case actions.SINGLE_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.PER_MONTH_RENT_SUCCESS:
      return {
        ...state,
        perMonthRent: action.payload,
      };
    case actions.PER_MONTH_RENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.PER_USER_PROPERTY_SUCCESS:
      return {
        ...state,
        perUserPropertyList: action.payload?.properties,
        perUserTotalProperty: action.payload?.total_properties,
        public:action.payload?.public,
        unpublic:action.payload?.unpublic,
        draft:action.payload?.draft,
       all:action.payload?.all,
      };
    case actions.PER_USER_PROPERTY_SUCCESS:
      return {
        ...state,
        error: action.error,
      };

    case actions.DELETE_USER_PROPERTY_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.DELETE_USER_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.FAVORITE_PROPERTY_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actions.FAVORITE_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.FAVORITE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };

    case actions.SEARCH_REQUEST_DATA:
      return {
        ...state,
        searchData: action.payload,
      };

      case actions.DATE_POPUP_OPEN:
        return{
          ...state,
          datePopUp:action.payload,
          additional:state.additional + 1
        }

    default:
      return { ...state };
  }
}
