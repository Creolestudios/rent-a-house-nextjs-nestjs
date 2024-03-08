export const actions = {

  GET_USER_LIST_REQUEST: "GET_USER_LIST_REQUEST",
  GET_USER_LIST_SUCCESS: "GET_USER_LIST_SUCCESS",
  GET_USER_LIST_ERROR: "GET_USER_LIST_ERROR",

  GET_SINGLE_REQUEST: "GET_SINGLE_RUQUEST",
  GET_SINGLE_SUCCESS: "GET_SINGLE_SUCCESS",
  GET_SINGLE_ERROR: "GET_SINGLE_ERROR",

  DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_ERROR: "DELETE_USER_ERROR",

  getUsersList: (payload: any) => ({
    type: actions.GET_USER_LIST_REQUEST,
    payload: payload
  }),

  getSingleUser: (payload: any) => ({
    type: actions.GET_SINGLE_REQUEST,
    payload: payload,
  }),

  deleteUser: (payload: any) => ({
    type: actions.DELETE_USER_REQUEST,
    payload: payload,
  }),

};
export default actions;
