export const actions = {
  UPDATE_PROFILE_REQUEST: "UPDATE_PROFILE_REQUEST",
  UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_ERROR: "UPDATE_PROFILE_ERROR",

  GET_USER_DETAILS_REQUEST: "GET_USER_DETAILS_REQUEST",
  GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
  GET_USER_DETAILS_ERROR: "GET_USER_DETAILS_ERROR",

  SUPPORTING_DOCUMENT_UPLOAD_REQUEST: "SUPPORTING_DOCUMENT_UPLOAD_REQUEST",
  SUPPORTING_DOCUMENT_UPLOAD_SUCCESS: "SUPPORTING_DOCUMENT_UPLOAD_SUCCESS",
  SUPPORTING_DOCUMENT_UPLOAD_ERROR: "SUPPORTING_DOCUMENT_UPLOAD_ERROR",

  CHANGE_PASSWORD_REQUEST: "CHANGE_PASSWORD_REQUEST",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_ERROR: "CHANGE_PASSWORD_ERROR",

  CONTACT_INFORMATION_REQUEST: "CONTACT_INFORMATION_REQUEST",
  CONTACT_INFORMATION_SUCCESS: "CONTACT_INFORMATION_SUCCESS",
  CONTACT_INFORMATION_ERROR: "CONTACT_INFORMATION_ERROR",

  GET_COUNTRY_LIST_REQUEST: "GET_COUNTRY_LIST_REQUEST",
  GET_COUNTRY_LIST_SUCCESS: "GET_COUNTRY_LIST_SUCCESS",
  GET_COUNTRY_LIST_ERROR: "GET_COUNTRY_LIST_ERROR",

  GET_STATE_LIST_REQUEST: "GET_STATE_LIST_REQUEST",
  GET_STATE_LIST_SUCCESS: "GET_STATE_LIST_SUCCESS",
  GET_STATE_LIST_ERROR: "GET_STATE_LIST_ERROR",

  GET_CITY_LIST_REQUEST: "GET_CITY_LIST_REQUEST",
  GET_CITY_LIST_SUCCESS: "GET_CITY_LIST_SUCCESS",
  GET_CITY_LIST_ERROR: "GET_CITY_LIST_ERROR",

  GET_LANGUAGE_LIST_REQUEST: "GET_LANGUAGE_LIST_REQUEST",
  GET_LANGUAGE_LIST_SUCCESS: "GET_LANGUAGE_LIST_SUCCESS",
  GET_LANGUAGE_LIST_ERROR: "GET_LANGUAGE_LIST_ERROR",

  CREATE_LANGUAGE_REQUEST: "CREATE_LANGUAGE_REQUEST",
  CREATE_LANGUAGE_SUCCESS: "CREATE_LANGUAGE_SUCCESS",
  CREATE_LANGUAGE_ERROR: "CREATE_LANGUAGE_ERROR",

  NOTIFICATION_SETTING_REQUEST: "NOTIFICATION_SETTING_REQUEST",
  NOTIFICATION_SETTING_SUCCESS: "NOTIFICATION_SETTING_SUCCESS",
  NOTIFICATION_SETTING_ERROR: "NOTIFICATION_SETTING_ERROR",

  REMOVE_PROFILE_REQUEST:"REMOVE_PROFILE_REQUEST",
  REMOVE_PROFILE_SUCCESS:"REMOVE_PROFILE_SUCCESS",
  REMOVE_PROFILE_ERROR:"REMOVE_PROFILE_ERROR",

  RESET_FLAG_VALUE:"RESET_FLAG_VALUE",

  updateProfile: (payload: any) => {
    return {
      type: actions.UPDATE_PROFILE_REQUEST,
      payload: payload,
    };
  },

  getUserDetails: (payload: any) => {
    return {
      type: actions.GET_USER_DETAILS_REQUEST,
      payload: payload,
    };
  },

  supportingDocumentUpload: (payload: any) => {
    return {
      type: actions.SUPPORTING_DOCUMENT_UPLOAD_REQUEST,
      payload: payload,
    };
  },

  contactInformation: (payload: any) => {
    return {
      type: actions.CONTACT_INFORMATION_REQUEST,
      payload: payload,
    };
  },

  changePassword: (payload: any) => {
    return {
      type: actions.CHANGE_PASSWORD_REQUEST,
      payload: payload,
    };
  },

  getCountryList: () => {
    return {
      type: actions.GET_COUNTRY_LIST_REQUEST,
    };
  },

  getStateList: (payload: any) => {
    return {
      type: actions.GET_STATE_LIST_REQUEST,
      payload: payload,
    };
  },

  getCityList: (payload: any) => {
    return {
      type: actions.GET_CITY_LIST_REQUEST,
      payload: payload,
    };
  },

  getLanguageList: () => {
    return {
      type: actions.GET_LANGUAGE_LIST_REQUEST,
    };
  },

  createLanguage: (payload: any) => {
    return {
      type: actions.CREATE_LANGUAGE_REQUEST,
      payload: payload,
    };
  },

  notificationSetting: (payload: any) => {
    return {
      type: actions.NOTIFICATION_SETTING_REQUEST,
      payload: payload,
    };
  },
  removeProfile:(payload:any)=>{
    return{
      type:actions.REMOVE_PROFILE_REQUEST,
      payload:payload
    }
  },

  resettingRemoveFlag:()=>{
    return{
      type:actions.RESET_FLAG_VALUE
    }
  }
};
export default actions;
