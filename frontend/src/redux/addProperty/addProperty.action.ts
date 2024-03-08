export const actions = {
  ADD_PROPERTY_STEP2_REQUEST: 'ADD_PROPERTY_STEP2_REQUEST',
  ADD_PROPERTY_STEP2_SUCCESS: 'ADD_PROPERTY_STEP2_SUCCESS',
  ADD_PROPERTY_STEP2_ERROR: 'ADD_PROPERTY_STEP2_ERROR',

  ADD_PROPERTY_STEP3_REQUEST: 'ADD_PROPERTY_STEP3_REQUEST',
  ADD_PROPERTY_STEP3_SUCCESS: 'ADD_PROPERTY_STEP3_SUCCESS',
  ADD_PROPERTY_STEP3_ERROR: 'ADD_PROPERTY_STEP3_ERROR',

  ADD_PROPERTY_STEP4_REQUEST: 'ADD_PROPERTY_STEP4_REQUEST',
  ADD_PROPERTY_STEP4_SUCCESS: 'ADD_PROPERTY_STEP4_SUCCESS',
  ADD_PROPERTY_STEP4_ERROR: 'ADD_PROPERTY_STEP4_ERROR',

  ADD_PROPERTY_STEP5_REQUEST: 'ADD_PROPERTY_STEP5_REQUEST',
  ADD_PROPERTY_STEP5_SUCCESS: 'ADD_PROPERTY_STEP5_SUCCESS',
  ADD_PROPERTY_STEP5_ERROR: 'ADD_PROPERTY_STEP5_ERROR',

  ADD_PROPERTY_STEP6_REQUEST: 'ADD_PROPERTY_STEP6_REQUEST',
  ADD_PROPERTY_STEP6_SUCCESS: 'ADD_PROPERTY_STEP6_SUCCESS',
  ADD_PROPERTY_STEP6_ERROR: 'ADD_PROPERTY_STEP6_ERROR',

  ADD_PROPERTY_STEP7_REQUEST: 'ADD_PROPERTY_STEP7_REQUEST',
  ADD_PROPERTY_STEP7_SUCCESS: 'ADD_PROPERTY_STEP7_SUCCESS',
  ADD_PROPERTY_STEP7_ERROR: 'ADD_PROPERTY_STEP7_ERROR',

  GET_COUNTRY_REQUEST: 'GET_COUNTRY_REQUEST',
  GET_COUNTRY_SUCCESS: 'GET_COUNTRY_SUCCESS',
  GET_COUNTRY_ERROR: 'GET_COUNTRY_ERROR',

  GET_STATE_REQUEST: 'GET_STATE_REQUEST',
  GET_STATE_SUCCESS: 'GET_STATE_SUCCESS',
  GET_STATE_ERROR: 'GET_STATE_ERROR',

  GET_CITY_REQUEST: 'GET_CITY_REQUEST',
  GET_CITY_SUCCESS: 'GET_CITY_SUCCESS',
  GET_CITY_ERROR: 'GET_CITY_ERROR',

  GET_FACILITY_AMENITIES_REQUEST: 'GET_FACILITY_AMENITIES_REQUEST',
  GET_FACILITY_AMENITIES_SUCCESS: 'GET_FACILITY_AMENITIES_SUCCESS',

  ADD_MOBILE_REQUEST: 'ADD_MOBILE_REQUEST',
  ADD_MOBILE_SUCCESS: 'ADD_MOBILE_SUCCESS',

  CHANGE_STEPPER_REQUEST: 'CHANGE_STEPPER_REQUEST',

  STEP2_DATA: 'STEP2_DATA',
  STEP3_DATA: 'STEP3_DATA',
  STEP4_DATA: 'STEP4_DATA',
  STEP5_DATA: 'STEP5_DATA',
  STEP6_DATA: 'STEP6_DATA',
  STEP7_DATA: 'STEP7_DATA',

  ADD_REQUEST_OTP_REQUEST: 'ADD_REQUEST_OTP_REQUEST',
  ADD_REQUEST_OTP_SUCCESS: 'ADD_REQUEST_OTP_SUCCESS',
  ADD_REQUEST_OTP_ERROR: 'ADD_REQUEST_OTP_ERROR',

  ADD_SUBMIT_OTP_REQUEST: 'ADD_SUBMIT_OTP_REQUEST',
  ADD_SUBMIT_OTP_SUCCESS: 'ADD_SUBMIT_OTP_SUCCESS',
  ADD_SUBMIT_OTP_ERROR: 'ADD_SUBMIT_OTP_ERROR',

  stepperValue: (payload) => ({
    type: actions.CHANGE_STEPPER_REQUEST,
    payload: payload,
  }),

  step2Data: (payload) => ({
    type: actions.STEP2_DATA,
    payload: payload,
  }),
  step3Data: (payload) => ({
    type: actions.STEP3_DATA,
    payload: payload,
  }),
  step4Data: (payload) => ({
    type: actions.STEP4_DATA,
    payload: payload,
  }),
  step5Data: (payload) => ({
    type: actions.STEP5_DATA,
    payload: payload,
  }),
  step6Data: (payload) => ({
    type: actions.STEP6_DATA,
    payload: payload,
  }),
  step7Data: (payload) => ({
    type: actions.STEP7_DATA,
    payload: payload,
  }),

  getCountry: () => ({
    type: actions.GET_COUNTRY_REQUEST,
  }),
  getState: (payload) => ({
    type: actions.GET_STATE_REQUEST,
    payload: payload,
  }),
  getCity: (payload) => ({
    type: actions.GET_CITY_REQUEST,
    payload: payload,
  }),
  getfacilites: () => ({
    type: actions.GET_FACILITY_AMENITIES_REQUEST,
  }),
  addMobile: (payload) => ({
    type: actions.ADD_MOBILE_REQUEST,
    payload: payload,
  }),

  postStep2Details: (payload) => ({
    type: actions.ADD_PROPERTY_STEP2_REQUEST,
    payload: payload,
  }),
  postStep3Details: (payload) => ({
    type: actions.ADD_PROPERTY_STEP3_REQUEST,
    payload: payload,
  }),
  postStep4Details: (payload) => ({
    type: actions.ADD_PROPERTY_STEP4_REQUEST,
    payload: payload,
  }),
  postStep5Details: (payload) => ({
    type: actions.ADD_PROPERTY_STEP5_REQUEST,
    payload: payload,
  }),
  postStep6Details: (payload) => ({
    type: actions.ADD_PROPERTY_STEP6_REQUEST,
    payload: payload,
  }),
  postStep7Details: (payload) => ({
    type: actions.ADD_PROPERTY_STEP7_REQUEST,
    payload: payload,
  }),

  requestOtp: (payload) => ({
    type: actions.ADD_REQUEST_OTP_REQUEST,
    payload: payload,
  }),

  submitOtp: (payload) => ({
    type: actions.ADD_SUBMIT_OTP_REQUEST,
    payload: payload,
  }),
};
export default actions;
