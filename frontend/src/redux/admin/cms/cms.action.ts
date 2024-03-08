export const actions = {
  CREATE_CMS_PAGE_REQUEST: 'CREATE_CMS_PAGE_REQUEST',
  CREATE_CMS_PAGE_SUCCESS: 'CREATE_CMS_PAGE_SUCCESS',
  CREATE_CMS_PAGE_ERROR: 'CREATE_CMS_PAGE_ERROR',

  GET_ALL_CMS_PAGE_REQUEST: 'GET_ALL_CMS_PAGE_REQUEST',
  GET_ALL_CMS_PAGE_SUCCESS: 'GET_ALL_CMS_PAGE_SUCCESS',
  GET_ALL_CMS_PAGE_ERROR: 'GET_ALL_CMS_PAGE_ERROR',

  GET_ONE_CMS_PAGE_REQUEST: 'GET_ONE_CMS_PAGE_REQUEST',
  GET_ONE_CMS_PAGE_SUCCESS: 'GET_ONE_CMS_PAGE_SUCCESS',
  GET_ONE_CMS_PAGE_ERROR: 'GET_ONE_CMS_PAGE_ERROR',

  UPDATE_CMS_PAGE_REQUEST: 'UPDATE_CMS_PAGE_REQUEST',
  UPDATE_CMS_PAGE_SUCCESS: 'UPDATE_CMS_PAGE_SUCCESS',
  UPDATE_CMS_PAGE_ERROR: 'UPDATE_CMS_PAGE_ERROR',

  REMOVE_CMS_PAGE_REQUEST: 'REMOVE_CMS_PAGE_REQUEST',
  REMOVE_CMS_PAGE_SUCCESS: 'REMOVE_CMS_PAGE_SUCCESS',
  REMOVE_CMS_PAGE_ERROR: 'REMOVE_CMS_PAGE_ERROR',

  CONTENT_REQUEST: 'CONTENT_REQUEST',
  CONTENT_SUCCESS: 'CONTENT_SUCCESS',
  CONTENT_ERROR: 'CONTENT_ERROR',

  ADD_CONTENT: 'ADD_CONTENT',

  createCMSPage: (payload: any) => {
    return {
      type: actions.CREATE_CMS_PAGE_REQUEST,
      payload: payload,
    };
  },

  getAllCMSPages: () => {
    return {
      type: actions.GET_ALL_CMS_PAGE_REQUEST,
    };
  },

  getOneCMSPage: (payload: any) => {
    return {
      type: actions.GET_ONE_CMS_PAGE_REQUEST,
      payload: payload,
    };
  },

  updateCMSPage: (payload: any) => {
    return {
      type: actions.UPDATE_CMS_PAGE_REQUEST,
      payload: payload,
    };
  },

  removeCMSPage: (payload: any) => {
    return {
      type: actions.REMOVE_CMS_PAGE_REQUEST,
      payload: payload,
    };
  },
  addContent: (payload: any) => {
    return {
      type: actions.ADD_CONTENT,
      payload: payload,
    };
  },

   getContent: (payload: any) => {
    return {
      type: actions.CONTENT_REQUEST,
      payload: payload,
    };
  },
};
export default actions;
