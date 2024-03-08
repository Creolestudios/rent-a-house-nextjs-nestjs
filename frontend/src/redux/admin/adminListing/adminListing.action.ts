export const actions = {
  CREATE_ADMIN_REQUEST: 'CREATE_ADMIN_REQUEST',
  CREATE_ADMIN_SUCCESS: 'CREATE_ADMIN_SUCCESS',
  CREATE_ADMIN_ERROR: 'CREATE_ADMIN_ERROR',

  DELETE_ADMIN_REQUEST: 'DELETE_ADMIN_REQUEST',
  DELETE_ADMIN_SUCCESS: 'DELETE_ADMIN_SUCCESS',
  DELETE_ADMIN_ERROR: 'DELETE_ADMIN_ERROR',

  UPDATE_ADMIN_REQUEST: 'UPDATE_ADMIN_REQUEST',
  UPDATE_ADMIN_SUCCESS: 'UPDATE_ADMIN_SUCCESS',
  UPDATE_ADMIN_ERROR: 'UPDATE_ADMIN_ERROR',

  GET_ADMIN_LIST_REQUEST: 'GET_ADMIN_LIST_REQUEST',
  GET_ADMIN_LIST_SUCCESS: 'GET_ADMIN_LIST_SUCCESS',
  GET_ADMIN_LIST_ERROR: 'GET_ADMIN_LIST_ERROR',

  GET_SINGLE_ADMIN_REQUEST: 'GET_SINGLE_ADMIN_REQUEST',
  GET_SINGLE_ADMIN_SUCCESS: 'GET_SINGLE_ADMIN_SUCCESS',
  GET_SINGLE_ADMIN_ERROR: 'GET_SINGLE_ADMIN_ERROR',

  getAdminsList: (payload: any) => ({
    type: actions.GET_ADMIN_LIST_REQUEST,
    payload: payload,
  }),

  getSingleAdmin: (payload: any) => ({
    type: actions.GET_SINGLE_ADMIN_REQUEST,
    payload: payload,
  }),

  createAdmin: (payload: any) => ({
    type: actions.CREATE_ADMIN_REQUEST,
    payload: payload,
  }),

  deleteAdmin: (payload: any) => ({
    type: actions.DELETE_ADMIN_REQUEST,
    payload: payload,
  }),

  updateAdmin: (payload: any) => ({
    type: actions.UPDATE_ADMIN_REQUEST,
    payload: payload,
  }),
};
export default actions;
