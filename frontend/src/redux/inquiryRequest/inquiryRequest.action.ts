export const actions = {
  CHECK_DETAILS_REQUEST: 'CHECK_DETAILS_REQUEST',
  CHECK_DETAILS_SUCCESS: 'CHECK_DETAILS_SUCCESS',
  CHECK_DETAILS_ERROR: 'CHECK_DETAILS_ERROR',

  SEND_DETAILS_REQUEST: 'SEND_DETAILS_REQUEST',
  SEND_DETAILS_SUCCESS: 'SEND_DETAILS_SUCCESS',
  SEND_DETAILS_ERROR: 'SEND_DETAILS_ERROR',

  GET_PROPERTY_REQUEST: 'GET_PROPERTY_REQUEST',
  GET_PROPERTY_SUCCESS: 'GET_PROPERTY_SUCCESS',
  GET_PROPERTY_ERROR: 'GET_PROPERTY_ERROR',

  CONTINUE_CHATING_REQUEST: 'CONTINUE_CHATING_REQUEST',
  CONTINUE_CHATING_SUCCESS: 'CONTINUE_CHATING_SUCCESS',
  CONTINUE_CHATING_ERROR: 'CONTINUE_CHATING_ERROR',

  GET_MESSAGES_REQUEST: 'GET_MESSAGES_REQUEST',
  GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
  GET_MESSAGES_ERROR: 'GET_MESSAGES_ERROR',

  SEND_MESSAGES_REQUEST: 'SEND_MESSAGES_REQUEST',
  SEND_MESSAGES_SUCCESS: 'SEND_MESSAGES_SUCCESS',
  SEND_MESSAGES_ERROR: 'SEND_MESSAGES_ERROR',

  SEND_PAYMENT_REQUEST: 'SEND_PAYMENT_REQUEST',
  SEND_PAYMENT_SUCCESS: 'SEND_PAYMENT_SUCCESS',
  SEND_PAYMENT_ERROR: 'SEND_PAYMENT_ERROR',

  SET_SUBSCRIPTION_MESSAGES_REQUEST: 'SET_SUBSCRIPTION_MESSAGES_REQUEST',

  LOGOUT: 'LOGOUT',

  checkDetails: (payload: { userId: number }) => ({
    type: actions.CHECK_DETAILS_REQUEST,
    payload: payload,
  }),

  sendDetails: (payload: any) => ({
    type: actions.SEND_DETAILS_REQUEST,
    payload: payload,
  }),

  getDetails: (payload: { propertyId: number }) => ({
    type: actions.GET_PROPERTY_REQUEST,
    payload: payload,
  }),

  continueChat: (payload: any) => ({
    type: actions.CONTINUE_CHATING_REQUEST,
    payload: payload,
  }),

  clearInquiry: () => ({
    type: actions.LOGOUT,
  }),

  setSubsriptionMessage: (payload: any) => ({
    type: actions.SET_SUBSCRIPTION_MESSAGES_REQUEST,
    payload: payload,
  }),

  sendMessage: (payload: any) => ({
    type: actions.SEND_MESSAGES_REQUEST,
    payload: payload,
  }),
};
export default actions;
