import appActions from '@/redux/app/app.action';

const initialState = {
  globalLoader: 0,
  activeTab: 1,
  modal: false,
  inquiryStep: 0,
  activeSidebarKey: '1',
  requestBooking: false,
  changeRequestDate: false,
  cancelBook: false,
  propertyHostActive: false,
  listOptionValue: 1,
  workListItemDist: 0,
  windowWidth: null,
  headerHeight: null,
  disableInput: false,
};

export default function appReducer(state = initialState, action: any) {
  switch (action.type) {
    case appActions.CHANGE_SIDEBAR_KEY:
      return {
        ...state,
        activeSidebarKey: action.payload,
      };
    case appActions.GLOBAL_LOADER_TRUE:
      return {
        ...state,
        globalLoader: state.globalLoader + 1,
      };
    case appActions.GLOBAL_LOADER_FALSE:
      return {
        ...state,
        globalLoader: state.globalLoader - 1,
      };

    case appActions.GET_ACTIVETAB_REQUEST:
      return {
        ...state,
      };

    case appActions.UPDATE_ACTIVETAB_REQUEST:
      return {
        ...state,
        activeTab: action.payload,
      };

    case appActions.MODAL_STATUS_TRUE:
      return {
        ...state,
        globalLoader: state.globalLoader + 1,
      };
    case appActions.GLOBAL_LOADER_FALSE:
      return {
        ...state,
        globalLoader: state.globalLoader - 1,
      };

    case appActions.STEPPER_REQUEST:
      return {
        ...state,
        inquiryStep: action.payload,
      };

    case appActions.REQUESTBOOKING_REQUEST:
      return {
        ...state,
        requestBooking: action.payload,
      };

    case appActions.CHANGEDATE_REQUEST:
      return {
        ...state,
        changeRequestDate: action.payload,
      };

    case appActions.CANCELBOOKING_REQUEST:
      return {
        ...state,
        cancelBook: action.payload,
      };

    case appActions.PROPERTYHOST_REQUEST:
      return {
        ...state,
        propertyHostActive: action.payload,
      };

    case appActions.LISTOPTION_REQUEST:
      return {
        ...state,
        listOptionValue: action.payload,
      };

    case appActions.WORKLIST_ITEM_DISTANCE:
      return {
        ...state,
        workListItemDist: action.payload,
      };

    case appActions.WINDOW_WIDTH_REQUEST:
      return {
        ...state,
        windowWidth: action.payload,
      };

    case appActions.HEADER_HEIGHT_REQUEST:
      return {
        ...state,
        headerHeight: action.payload,
      };

    case appActions.DISABLE_INPUT_REQUEST:
      return {
        ...state,
        disableInput: action.payload,
      };

    default:
      return state;
  }
}
