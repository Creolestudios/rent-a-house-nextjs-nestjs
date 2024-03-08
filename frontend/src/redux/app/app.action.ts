const appActions = {
  GLOBAL_LOADER: 'GLOBAL_LOADER',
  GLOBAL_LOADER_TRUE: 'GLOBAL_LOADER_TRUE',
  GLOBAL_LOADER_FALSE: 'GLOBAL_LOADER_FALSE',

  GET_ACTIVETAB_REQUEST: 'GET_ACTIVETAB_REQUEST',
  UPDATE_ACTIVETAB_REQUEST: 'UPDATE_ACTIVETAB_REQUEST',

  MODAL_STATUS: 'MODAL_STATUS',
  MODAL_STATUS_TRUE: 'MODAL_STATUS_TRUE',
  MODAL_STATUS_FALSE: 'MODAL_STATUS_FALSE',

  STEPPER_REQUEST: 'STEPPER_REQUEST',
  STEPPER_SUCCESS: 'STEPPER_SUCCESS',

  CHANGE_SIDEBAR_KEY: 'CHANGE_SIDEBAR_KEY',

  REQUESTBOOKING_REQUEST: 'REQUESTBOOKING_REQUEST',

  CHANGEDATE_REQUEST: 'CHANGEDATE_REQUEST',

  CANCELBOOKING_REQUEST: 'CANCELBOOKING_REQUEST',

  PROPERTYHOST_REQUEST: 'PROPERTYHOST_REQUEST',
  LISTOPTION_REQUEST: 'LISTOPTION_REQUEST',

  WORKLIST_ITEM_DISTANCE: 'WORKLIST_ITEM_DISTANCE',

  WINDOW_WIDTH_REQUEST: 'WINDOW_WIDTH_REQUEST',

  HEADER_HEIGHT_REQUEST: 'HEADER_HEIGHT_REQUEST',

  DISABLE_INPUT_REQUEST: 'DISABLE_INPUT_REQUEST',

  LANG_SELECT_REQUEST: 'LANG_SELECT_REQUEST',

  changeSidebarKey: (key: string) => ({
    type: appActions.CHANGE_SIDEBAR_KEY,
    payload: key,
  }),

  globalLoaderHandler: (isIncrement: boolean) => ({
    type: appActions.GLOBAL_LOADER,
    isIncrement,
  }),

  getActiveTab: () => ({
    type: appActions.GET_ACTIVETAB_REQUEST,
  }),
  updateActiveTab: (payload: any) => ({
    type: appActions.UPDATE_ACTIVETAB_REQUEST,
    payload: payload,
  }),

  inquiryStepper: (payload: number) => ({
    type: appActions.STEPPER_REQUEST,
    payload: payload,
  }),

  requestBooking: (payload: boolean) => ({
    type: appActions.REQUESTBOOKING_REQUEST,
    payload: payload,
  }),

  changeRequestDate: (payload: boolean) => ({
    type: appActions.CHANGEDATE_REQUEST,
    payload: payload,
  }),

  cancelBooking: (payload: boolean) => ({
    type: appActions.CANCELBOOKING_REQUEST,
    payload: payload,
  }),

  propertyHost: (payload: boolean) => ({
    type: appActions.PROPERTYHOST_REQUEST,
    payload: payload,
  }),

  listOption: (payload: boolean) => ({
    type: appActions.LISTOPTION_REQUEST,
    payload: payload,
  }),

  workListItemDistance: (payload: number) => ({
    type: appActions.WORKLIST_ITEM_DISTANCE,
    payload: payload,
  }),

  windowWidth: (payload: number) => ({
    type: appActions.WINDOW_WIDTH_REQUEST,
    payload: payload,
  }),

  headerHeight: (payload: number) => ({
    type: appActions.HEADER_HEIGHT_REQUEST,
    payload: payload,
  }),

  disableInput: (payload: boolean) => ({
    type: appActions.DISABLE_INPUT_REQUEST,
    payload: payload,
  }),
  
};

export default appActions;
